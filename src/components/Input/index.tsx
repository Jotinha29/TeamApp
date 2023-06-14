import { TextInput, TextInputProps } from 'react-native'
import { Container } from './style'
import { useTheme } from 'styled-components/native'
import React from 'react'

type InputComponentProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputComponentProps) {
  const { COLORS } = useTheme()
  return (
    <Container
      ref={inputRef}
      {...rest}
      placeholderTextColor={COLORS.GRAY_300}
    />
  )
}
