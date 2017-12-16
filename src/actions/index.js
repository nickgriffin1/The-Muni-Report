import { getAllMuniLines, getLineLocations } from '../utils/api'

export function fetchLines() {
  return dispatch => {
    return getAllMuniLines().then(lines => {
      console.log('lines', lines)
      dispatch(receiveLines(lines))
    })
  }
}

function receiveLines(lines) {
  return {
    type: 'RECEIVE_LINES',
    lines
  }
}

export function addLinePositions(line) {
  return dispatch => {
    return getLineLocations(line).then(positions => {
      console.log('positions', positions)
      dispatch(receiveLinePositions(line, positions))
    })
  }
}

export function receiveLinePositions(line, positions) {
  return {
    type: 'ADD_LINE_POSITIONS',
    line,
    positions
  }
}

export function removeLinePositions(line) {
  return {
    type: 'REMOVE_LINE_POSITIONS',
    line
  }
}
