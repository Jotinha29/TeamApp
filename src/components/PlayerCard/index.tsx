import { ButtonIcon } from '@components/ButtonIcon'
import { PlayerContainer, PlayerIcon, PlayerName } from './style'
import React from 'react'

type PlayerCardProps = {
  name: string
  onRemove: () => void
}
export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <PlayerContainer>
      <PlayerIcon name="person" />
      <PlayerName>{name}</PlayerName>
      <ButtonIcon iconName="close" type="SECONDARY" onPress={onRemove} />
    </PlayerContainer>
  )
}
