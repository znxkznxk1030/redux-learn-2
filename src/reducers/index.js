import { combineReducers } from 'redux'
import reducer_weather from './reducer_weather'
const rootReducer = combineReducers({
  state: (state = {}) => state,
  weather: reducer_weather,
})

export default rootReducer
