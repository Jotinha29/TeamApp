import { Header } from '@components/Header'
import * as S from './styles'
import { HighLight } from '@components/HighLight'
import { GroupCard } from '@components/GroupCard'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { ListInput } from '@components/ListInput'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export function Groups() {
  const [groups, setGroups] = useState([])
  const { navigate } = useNavigation()

  function handleNewGroup() {
    navigate('newGroup')
  }

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
        showsVerticalScrollIndicator={false}
      />
      <Button title="Create new team" onPress={handleNewGroup} />
    </S.Container>
  )
}
