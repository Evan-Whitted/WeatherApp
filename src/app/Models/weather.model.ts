export interface WeatherData {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  country: string
  sunrise: number
  sunset: number
}






//Original weather data api info

// export interface WeatherData {
//     queryCost: number
//     latitude: number
//     longitude: number
//     resolvedAddress: string
//     address: string
//     timezone: string
//     tzoffset: number
//     description: string
//     days: Day[]
//     alerts: any[]
//     stations: Stations
//     currentConditions: CurrentConditions
//   }

//   export interface CurrentConditions {
//     datetime: string
//     datetimeEpoch: number
//     temp: number
//     feelslike: number
//     humidity: number
//     dew: number
//     precip: number
//     precipprob: number
//     snow: number
//     snowdepth: number
//     preciptype: any
//     windgust: any
//     windspeed: number
//     winddir: number
//     pressure: number
//     visibility: number
//     cloudcover: number
//     solarradiation: number
//     solarenergy: number
//     uvindex: number
//     conditions: string
//     icon: string
//     stations: string[]
//     source: string
//     sunrise: string
//     sunriseEpoch: number
//     sunset: string
//     sunsetEpoch: number
//     moonphase: number
//   }
  
//   export interface Day {
//     datetime: string
//     datetimeEpoch: number
//     tempmax: number
//     tempmin: number
//     temp: number
//     feelslikemax: number
//     feelslikemin: number
//     feelslike: number
//     dew: number
//     humidity: number
//     precip: number
//     precipprob: number
//     precipcover: number
//     preciptype: string[]
//     snow: number
//     snowdepth: number
//     windgust: number
//     windspeed: number
//     winddir: number
//     pressure: number
//     cloudcover: number
//     visibility: number
//     solarradiation: number
//     solarenergy: number
//     uvindex: number
//     severerisk: number
//     sunrise: string
//     sunriseEpoch: number
//     sunset: string
//     sunsetEpoch: number
//     moonphase: number
//     conditions: string
//     description: string
//     icon: string
//     stations: string[]
//     source: string
//     hours: Hour[]
//   }
  
//   export interface Hour {
//     datetime: string
//     datetimeEpoch: number
//     temp: number
//     feelslike: number
//     humidity: number
//     dew: number
//     precip: number
//     precipprob: number
//     snow: number
//     snowdepth: number
//     preciptype?: string[]
//     windgust: number
//     windspeed: number
//     winddir: number
//     pressure: number
//     visibility: number
//     cloudcover: number
//     solarradiation: number
//     solarenergy?: number
//     uvindex: number
//     severerisk: number
//     conditions: string
//     icon: string
//     stations?: string[]
//     source: string
//   }
  
//   export interface Stations {
//     KADW: Kadw
//     KDAA: Kdaa
//     AS365: As365
//     KDCA: Kdca
//     PWDM2: Pwdm2
//     KCGS: Kcgs
//   }
  
//   export interface Kadw {
//     distance: number
//     latitude: number
//     longitude: number
//     useCount: number
//     id: string
//     name: string
//     quality: number
//     contribution: number
//   }
  
//   export interface Kdaa {
//     distance: number
//     latitude: number
//     longitude: number
//     useCount: number
//     id: string
//     name: string
//     quality: number
//     contribution: number
//   }
  
//   export interface As365 {
//     distance: number
//     latitude: number
//     longitude: number
//     useCount: number
//     id: string
//     name: string
//     quality: number
//     contribution: number
//   }
  
//   export interface Kdca {
//     distance: number
//     latitude: number
//     longitude: number
//     useCount: number
//     id: string
//     name: string
//     quality: number
//     contribution: number
//   }
  
//   export interface Pwdm2 {
//     distance: number
//     latitude: number
//     longitude: number
//     useCount: number
//     id: string
//     name: string
//     quality: number
//     contribution: number
//   }
  
//   export interface Kcgs {
//     distance: number
//     latitude: number
//     longitude: number
//     useCount: number
//     id: string
//     name: string
//     quality: number
//     contribution: number
//   }
  
  
  