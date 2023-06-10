import { PlayerContainer, PlayerIcon, PlayerName } from './style'

type PlayerCardProps = {
  name: string
}
export function PlayerCard({ name }: PlayerCardProps) {
  return (
    <PlayerContainer>
      <PlayerIcon name="person" />
      <PlayerName>{name}</PlayerName>
    </PlayerContainer>
  )
}
