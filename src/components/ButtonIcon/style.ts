import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconStyleProps = 'PRIMARY' | 'SECONDARY'

type ButtonProps = {
  type: ButtonIconStyleProps
}

export const ButtonIconContainer = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`
export const Icon = styled(MaterialIcons).attrs<ButtonProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  }),
)``
