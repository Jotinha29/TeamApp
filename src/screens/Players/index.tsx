import { Header } from '@components/Header'
import { Container, Forms, HeaderList, PlayerNumber } from './style'
import { HighLight } from '@components/HighLight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/FIlter'
import { FlatList } from 'react-native'
import { useState } from 'react'
import { PlayerCard } from '@components/PlayerCard'
import { ListInput } from '@components/ListInput'
import { Button } from '@components/Button'
import { RouteProp, useRoute } from '@react-navigation/native'

type RouteParams = {
  group: string
}

type RootStackParamList = {
  group: RouteParams
  // Outras rotas
}

export function Players() {
  const [team, setTeam] = useState('Team Aa')
  const [players, setPlayers] = useState(['Matias'])

  /* Routes */
  const { params } = useRoute<RouteProp<RootStackParamList, 'group'>>()
  const groupName = params?.group || ''

  return (
    <Container>
      <Header showBackButton />
      <HighLight title={groupName} subTitle="Add new participants" />

      <Forms>
        <Input placeholder="Person Name" autoCorrect={false} />
        <ButtonIcon iconName="add" />
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
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
