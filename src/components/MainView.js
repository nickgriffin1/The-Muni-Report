import React, { Component } from 'react'
import styled from 'styled-components'
import InfoPanel from './InfoPanel'
import SFMap from './SFMap'

const Container = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100%;
`

class MainView extends Component {
  render() {
    return (
      <Container>
        <SFMap
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <InfoPanel />
      </Container>
    )
  }
}

export default MainView
