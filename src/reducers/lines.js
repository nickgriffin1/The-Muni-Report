export default function lines(state = [], action) {
    switch (action.type) {
      case 'RECEIVE_LINES':
        return action.lines
      default:
        return state
    }
}
