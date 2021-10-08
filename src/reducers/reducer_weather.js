import { FETCH_WEATHER } from '../actions'

export default function (state = null, action) {
  console.log('Action: ', action)
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data])
  }

  return state
}
