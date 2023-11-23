interface TempProps {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface WeatherProps {
  id: number
  main: string
  description: string
  icon: string
}

interface InfosProps {
  name: string
  weather: WeatherProps[]
  main: TempProps
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      city: InfosProps
    }
  }
}