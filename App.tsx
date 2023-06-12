import { ThemeProvider } from 'styled-components'
import defaultTheme from './src/theme'
import { SafeAreaView, StatusBar } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'
import { Routes } from './src/Routes'
import React from 'react'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <SafeAreaView>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar barStyle={'light-content'} translucent />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </SafeAreaView>
  )
}
