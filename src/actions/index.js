import axios from 'axios'
import { API_KEY } from '../config'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},kr`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
