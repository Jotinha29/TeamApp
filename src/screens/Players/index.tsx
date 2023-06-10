import { Header } from '@components/Header'
import { Container, Forms, HeaderList, PlayerNumber } from './style'
import { HighLight } from '@components/HighLight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/FIlter'
import { FlatList } from 'react-native'
import { useState } from 'react'
import { PlayerCard } from '@components/PlayerCard'

export function Players() {
  const [team, setTeam] = useState('Team Aa')
  const [players, setPlayers] = useState(['Matias'])
  return (
    <Container>
      <Header showBackButton />
      <HighLight title="Group Name" subTitle="Add new participants" />

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
      </HeaderList>
      <PlayerNumber>{players.length}</PlayerNumber>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayerCard name={item} />}
      />
    </Container>
  )
}
