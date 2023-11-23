import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'

import { InfosProps } from '../../@types/navigation'

import clearImage from '@assets/images/800.png'
import cloudsImage from '@assets/images/80x.png'
import thunderstormImage from '@assets/images/2xx.png'
import drizzleImage from '@assets/images/3xx.png'
import rainImage from '@assets/images/5xx.png'
import snowImage from '@assets/images/6xx.png'
import mistImage from '@assets/images/7xx.png'

import { theme } from '@theme/index'

import {
  Container,
  CityName,
  Title,
  Description,
  Degree,
  Button,
  ButtonText,
  DegreeSection,
  Image,
} from './styles'

export function City() {
  const navigation = useNavigation()

  const route = useRoute()
  const { name, weather, main } = route.params as InfosProps

  const currentDate = new Date()

  const day = currentDate.getDate()
  const month = currentDate.getMonth()

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  function selectImage() {
    if (weather[0].id === 800) {
      return clearImage
    } else if (
      weather[0].id.toString()[0] === '8' &&
      weather[0].id.toString()[2] !== '0'
    ) {
      return cloudsImage
    } else if (weather[0].id.toString()[0] === '2') {
      return thunderstormImage
    } else if (weather[0].id.toString()[0] === '3') {
      return drizzleImage
    } else if (weather[0].id.toString()[0] === '5') {
      return rainImage
    } else if (weather[0].id.toString()[0] === '6') {
      return snowImage
    } else if (weather[0].id.toString()[0] === '7') {
      return mistImage
    }
    return clearImage
  }

  return (
    <Container backgroundTheme={weather[0].id}>
      <Button
        onPress={() => navigation.goBack()}
        fontTheme={weather[0].id.toString()[0] === '8' ? "dark" : "light"}
      >
        <Feather
          name='arrow-left'
          color={
            weather[0].id.toString()[0] === '8' ?
              theme.COLORS.DARK_FONTS :
              theme.COLORS.LIGHT_FONTS
          }
          size={20}
        />
        <ButtonText fontTheme={weather[0].id.toString()[0] === '8' ? "dark" : "light"}>
          Go back
        </ButtonText>
      </Button>

      <CityName fontTheme={weather[0].id.toString()[0] === '8' ? "dark" : "light"}>{name}</CityName>
      <Description fontTheme={weather[0].id.toString()[0] === '8' ? "dark" : "light"}>{days[currentDate.getDay() - 1]}, {day} {months[month]}</Description>

      <Title fontTheme={weather[0].id.toString()[0] === '8' ? "dark" : "light"}>{weather[0].main}</Title>
      <Description fontTheme={weather[0].id.toString()[0] === '8' ? "dark" : "light"}>{weather[0].description}</Description>

      <Image source={selectImage()} />

      <DegreeSection>
        <Degree fontTheme={weather[0].id.toString()[0] === '8' ? "dark" : "light"}>{Math.round(main.temp)}º</Degree>
        <Description fontTheme={weather[0].id.toString()[0] === '8' ? "dark" : "light"}>Feels like {Math.round(main.feels_like)}º</Description>
      </DegreeSection>
    </Container>
  )
}
