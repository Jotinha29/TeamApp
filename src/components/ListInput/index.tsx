import { Container, Message } from './style'
type MessageProps = {
  message: string
}
export function ListInput({ message }: MessageProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
