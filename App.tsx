import React from 'react'
import { StatusBar, ActivityIndicator } from 'react-native'
import { useFonts, Montserrat_300Light, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'

import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme'

import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_300Light, Montserrat_400Regular, Montserrat_600SemiBold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      <StatusBar barStyle="default" />
    </ThemeProvider>
  );
}
