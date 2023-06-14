import { Header } from '@components/Header'
import { Container, Content, Icon } from './style'
import React, { useState } from 'react'
import { HighLight } from '@components/HighLight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { groupCreate } from '@storage/group/groupCreate'
import { Alert } from 'react-native'
import { AppError } from '@utils/AppError'

export function NewGroup() {
  const { navigate } = useNavigation()
  const [group, setGroup] = useState('')
  async function handleNewGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('New Group ⚠️', 'Inform a team name ')
      }
      await groupCreate(group)
      navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('New Group ⚠️', error?.message || '')
      } else {
        console.log(error)
        return Alert.alert(
          'New Group ⚠️ - Generic Error',
          'Cant create an new group',
        )
      }
    }
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
