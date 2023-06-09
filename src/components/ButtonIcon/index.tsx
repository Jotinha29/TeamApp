import { TouchableOpacityProps } from 'react-native'
import { ButtonIconContainer, ButtonIconStyleProps, Icon } from './style'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

type ButtonComponentProps = TouchableOpacityProps & {
  iconName: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconStyleProps
}

export function ButtonIcon({
  iconName,
  type = 'PRIMARY',
  ...rest
}: ButtonComponentProps) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon name={iconName} type={type} />
    </ButtonIconContainer>
  )
}
