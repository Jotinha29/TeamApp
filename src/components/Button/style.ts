import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type ButtonProps = {
  type: ButtonTypeStyleProps
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonProps>`
  min-height: 56px;
  max-height: 56px;
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`

// CSS helper StyledComponents
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
