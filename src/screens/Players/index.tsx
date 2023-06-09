import { Header } from '@components/Header'
import { Container, Forms } from './style'
import { HighLight } from '@components/HighLight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <HighLight title="Group Name" subTitle="Add new participants" />
      <Forms>
        <Input placeholder="Person Name" autoCorrect={false} />
        <ButtonIcon iconName="add" />
      </Forms>
    </Container>
  )
}
