import { Header } from '@components/Header'
import * as S from './styles'
import { HighLight } from '@components/HighLight'
import { GroupCard } from '@components/GroupCard'
import { useState } from 'react'
import { FlatList } from 'react-native'

export function Groups() {
  const [groups, setGroups] = useState(['Friends', 'RocketGuys'])
  return (
    <S.Container>
      <Header />
      <HighLight title="Teams" subTitle="Play with your Team" />

      <FlatList 
      data={groups}
      keyExtractor={item => item}
      renderItem={({item})=>(
        <GroupCard title={item}/>
      )}
      />

    </S.Container>
  )
}
