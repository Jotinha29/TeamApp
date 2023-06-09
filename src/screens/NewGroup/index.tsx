import { Header } from '@components/Header'
import { Container, Content, Icon } from './style'
import React from 'react'
import { HighLight } from '@components/HighLight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighLight
          title="New Team"
          subTitle="Create new team and add participants"
        />
        <Input placeholder="Team Name" />
        <Button title="Create" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}
