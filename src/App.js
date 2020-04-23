// @flow

import React, { Component, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// hack to fix map  issues  with loading default marker
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default function App () {
  const pos = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  }

  const [markers, setMarkers] = useState([])

  const addMarker = e => {
    const { lat, lng } = e.latlng
    const newMarker = [lat, lng]
    setMarkers([...markers, newMarker])
  }

  const removeMarker = index =>
    setMarkers(markers => markers.filter((_, i) => i !== index))

  return (
    <Map
      center={[pos.lat, pos.lng]}
      zoom={pos.zoom}
      style={{ height: '500px', width: '500px' }}
      onClick={addMarker}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {markers.map(([lat, lng], index) => (
        <Marker position={[lat, lng]}>
          <Popup>
            <span onClick={() => removeMarker(index)}> remove marker</span>
          </Popup>
        </Marker>
      ))}
    </Map>
  )
}
