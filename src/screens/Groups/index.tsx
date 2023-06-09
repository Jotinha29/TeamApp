import { Header } from '@components/Header'
import * as S from './styles'
import { HighLight } from '@components/HighLight'
import { GroupCard } from '@components/GroupCard'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { ListInput } from '@components/ListInput'
import { Button } from '@components/Button'

export function Groups() {
  const [groups, setGroups] = useState([])
  return (
    <S.Container>
      <Header />
      <HighLight title="Teams" subTitle="Play with your Team" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListInput message="How about registering the first class" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />
      <Button title="Create new team" />
    </S.Container>
  )
}
