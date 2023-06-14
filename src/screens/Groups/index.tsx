import { Header } from '@components/Header'
import * as S from './styles'
import { HighLight } from '@components/HighLight'
import { GroupCard } from '@components/GroupCard'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { ListInput } from '@components/ListInput'
import { Button } from '@components/Button'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getGroups } from '@storage/group/getGroups'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const { navigate } = useNavigation()

  function handleNewGroup() {
    navigate('newGroup')
  }

  function handleOpenGroup(group: string) {
    navigate('players', { group })
  }

  async function fetchGroupsFromLocalStorage() {
    try {
      const data = await getGroups()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchGroupsFromLocalStorage()
    }, []),
  )

  return (
    <S.Container>
      <Header />
      <HighLight title="Teams" subTitle="Play with your Team" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
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
