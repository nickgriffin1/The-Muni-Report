// reducer manages data for the positions of the lines selected by users
export default function positions(state = {}, action) {
    switch (action.type) {
      case 'ADD_LINE_POSITIONS':
        return {
          ...state,
          [action.line]: action.positions
        }
      case 'REMOVE_LINE_POSITIONS':
        const { [action.line]: _, ...filteredState } = state
        return filteredState
      default:
        return state
    }
}
