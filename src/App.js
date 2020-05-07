import React, { useState, useEffect } from 'react'
import Map from './components/Map'
import LeftPanel from './components/leftpanel'

function App () {
  const [position, setPosition] = useState({ lat: 51.505, lng: 0.09 })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        console.log('position', latitude, longitude)
        setPosition({ lat: latitude, lng: longitude })
      },
      err => {
        console.log('error getting current location', err)
      }
    )
  }, [])

  return (
    <>
      <Map position={position} />
      <LeftPanel position={position} />
    </>
  )
}

export default App
