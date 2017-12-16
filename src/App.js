import React, { Component } from 'react'
import MainView from './components/MainView'

// would use to implement routing but for now it is just a passthrough component
class App extends Component {
  render() {
    return (
      <MainView></MainView>
    )
  }
}

export default App
