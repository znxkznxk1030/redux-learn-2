import axios from 'axios'
import config from '../config'
const { API_KEY } = config
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  console.log('Request: ', request)

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
