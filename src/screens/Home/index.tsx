import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'

import {
  Container,
  Title,
  Description,
  Form,
  Input,
} from './styles';

export function Home() {
  const navigation = useNavigation()

  const [cityName, setCityName] = useState<string>('')

  async function handleSearch() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.replace(' ', '%20')}&appid=31bcc7d1730e490cd1060d476b1fac62&units=metric`,
      {
        method: 'GET',
      }
    )

    const data = await response.json()

    if (data) {
      navigation.navigate('city', {
        name: data.name,
        weather: data.weather,
        main: data.main
      })
    }
  }

  return (
    <Container>
      <Title>Search your city</Title>
      <Description>Type the name of your city.</Description>

      <Form>
        <Input
          placeholder='Your city'
          placeholderTextColor='#6b6b6b'
          value={cityName}
          onChangeText={setCityName}
        />

        <Button label="Search" onPress={handleSearch} />
      </Form>
    </Container>
  )
}
