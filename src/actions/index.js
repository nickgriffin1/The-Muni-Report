import { getAllMuniLines, getLineLocations } from '../utils/api'

export function fetchLines() {
  return dispatch => {
    return getAllMuniLines().then(lines => {
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
      dispatch(receiveLinePositions(line, positions))
    })
  }
}

export function updateLinePositions(lines) {
  return dispatch => {
    lines.map(line => {
      return getLineLocations(line).then(positions => {
        // delete previous entries
        dispatch(removeLinePositions(line))
        // add new entries
        dispatch(receiveLinePositions(line, positions))
      })
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

export function selectLine(line) {
  return {
    type: 'SELECT_LINE',
    line
  }
}
export function removeSelectedLine(line) {
  return {
    type: 'REMOVE_SELECTED_LINE',
    line
  }
}
