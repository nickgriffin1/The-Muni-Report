// reducer manages data for the positions of the lines selected by users
export default function positions(state = [], action) {
    switch (action.type) {
      case 'ADD_LINE_POSITIONS':
        if (action.positions != null && action.positions.length > 0) {
          return [
            ...state,
            // only add items with a route tag, for reason a lot don't and I'm considering it bad data
            ...action.positions.filter(position => position.routeTag)
          ]
        } else if (action.positions != null && action.positions.length === 0) {
          // the API will return a object when there is only one entry
          // making it so that all entries are of type array
          return [
            ...state,
            action.positions.filter(position => position.routeTag)
          ]
        } else { return state }
      case 'REMOVE_LINE_POSITIONS':
        return state.filter(item => item.routeTag !== action.line)
      default:
        return state
    }
}
