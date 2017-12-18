import { combineReducers } from 'redux'
import positions from './positions'
import allLines from './allLines'
import selectedLines from './selectedLines'

export default combineReducers({
  positions,
  allLines,
  selectedLines
})
