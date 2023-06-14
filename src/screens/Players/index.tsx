import { Header } from '@components/Header'
import { Container, Forms, HeaderList, PlayerNumber } from './style'
import { HighLight } from '@components/HighLight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/FIlter'
import { Alert, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { PlayerCard } from '@components/PlayerCard'
import { ListInput } from '@components/ListInput'
import { Button } from '@components/Button'
import { RouteProp, useRoute } from '@react-navigation/native'
import { AppError } from '@utils/AppError'
import { PlayerAddByGroup } from '@storage/players/playerAddByGroup'
import { GetPlayersByGroupAndTeam } from '@storage/players/getPlayersByGroup&Team'
import { PlayerStorageDTO } from '@storage/players/PlayerStorageDTO'

type RouteParams = {
  group: string
}

type RootStackParamList = {
  group: RouteParams
  // Outras rotas
}

export function Players() {
  const [team, setTeam] = useState('Team Aa')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [playerName, setPlayerName] = useState('')

  /* Routes */
  const { params } = useRoute<RouteProp<RootStackParamList, 'group'>>()
  const groupName = params?.group || ''

  async function hanldeAddPlayer() {
    if (playerName.trim().length === 0) {
      return Alert.alert('New Player 🎮', 'Please inform an name')
    }
    const newPlayer = {
      name: playerName,
      team,
    }
    try {
      await PlayerAddByGroup(newPlayer, groupName)
      fetchPlayersByTeam()
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('New Player 🎮', error.message)
      } else {
        console.log(error)
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await GetPlayersByGroupAndTeam(groupName, team)
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
      Alert.alert('Players 💻', 'Unhandle to load teams')
    }
  }
  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])
  return (
    <Container>
      <Header showBackButton />
      <HighLight title={groupName} subTitle="Add new participants" />

      <Forms>
        <Input
          placeholder="Person Name"
          autoCorrect={false}
          onChangeText={setPlayerName}
        />
        <ButtonIcon iconName="add" onPress={hanldeAddPlayer} />
      </Forms>
      <HeaderList>
        <FlatList
          data={['Team A', 'Team B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <PlayerNumber>{players.length}</PlayerNumber>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListInput message="Thera are no people on this team" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remove team" type="SECONDARY" />
    </Container>
  )
}
