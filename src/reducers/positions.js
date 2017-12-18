// reducer manages data for the positions of the lines selected by users
export default function positions(state = [], action) {
    switch (action.type) {
      case 'ADD_LINE_POSITIONS':
        if (action.positions != null && action.positions.length > 0) {
          return [
            ...state.filter(item => item.routeTag !== action.line),
            ...action.positions
          ]
        } else if (action.positions != null && action.positions.length === 0) {
          // the API will return a object when there is only one entry
          // making it so that all entries are of type array
          return [
            ...state.filter(item => item.routeTag !== action.line),
            ...action.positions
          ]
        } else {
          // only add data if positions are defined and return state minus line without data
          return state.filter(item => item.line !== action.line)
        }
      case 'REMOVE_LINE_POSITIONS':
        return state.filter(item => item.routeTag !== action.line)
      default:
        return state
    }
}
