import { Header } from '@components/Header'
import { Container, Content, Icon } from './style'
import React, { useState } from 'react'
import { HighLight } from '@components/HighLight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'

export function NewGroup() {
  const { navigate } = useNavigation()
  const [group, setGroup] = useState('')
  function handleNewGroup() {
    navigate('players', { group })
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighLight
          title="New Team"
          subTitle="Create new team and add participants"
        />
        <Input placeholder="Team Name" onChangeText={setGroup} />
        <Button
          title="Create"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  )
}
