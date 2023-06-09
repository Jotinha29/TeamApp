import { TouchableOpacityProps } from 'react-native'
import { ButtonContainer, ButtonTypeStyleProps, Title } from './style'

type ButtonComponentProps = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({
  title,
  type = 'PRIMARY',
  ...rest
}: ButtonComponentProps) {
  return (
    <ButtonContainer type={type} {...rest}>
      <Title>{title}</Title>
    </ButtonContainer>
  )
}
