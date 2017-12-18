export default function selectedLines(state = [], action) {
    switch (action.type) {
      case 'SELECT_LINE':
        return [
          ...state,
          action.line
        ]
      case 'REMOVE_SELECTED_LINE':
        return state.filter(line => line !== action.line)
      default:
        return state
    }
}
