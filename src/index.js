import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { fetchLines } from './actions'

// logs all actions
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

// connects redux with redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      logger,
      thunkMiddleware
    )
  )
)

// get all lines from API
store.dispatch(fetchLines())
// update the lines once every 15 seconds
/*setInterval(() => {
  const lines = store.getState().lines
  lines.forEach(line => {
    store.dispatch(addLinePositions(line.tag))
  })
}, 15000)*/


// render application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
