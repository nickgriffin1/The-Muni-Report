import { combineReducers } from 'redux'
import positions from './positions'
import lines from './lines'

export default combineReducers({
  positions,
  lines
})
