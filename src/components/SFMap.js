import React, { Component } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

class SFMap extends Component {
  render() {
    const { positions } = this.props
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 37.773972, lng: -122.431297 }}
      >
        {positions.length > 0 && positions.map(position => (
          <Marker
            key={position.id + '-' + position.routeTag}
            position={{
              lat: parseFloat(position.lat),
              lng: parseFloat(position.lon)
            }}
          />
        ))}
      </GoogleMap>
    )
  }
}
export default withScriptjs(withGoogleMap(SFMap))
