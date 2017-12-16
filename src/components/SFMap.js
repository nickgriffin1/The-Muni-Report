import React, { Component } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

class SFMap extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 37.773972, lng: -122.431297 }}
      >
        {this.state !== null && this.state.n.map(point => (
          <Marker key={point.id} position={{ lat: parseFloat(point.lat), lng: parseFloat(point.lon) }} />
        ))}
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(SFMap))
