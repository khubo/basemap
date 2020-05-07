import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/index.min.css'

const TOKEN = process.env.REACT_APP_GOOGLE_AUTH_TOKEN

export default function LeftPanel ({ position }) {
  return (
    <>
      <GooglePlacesAutocomplete
        style={{
          width: '25%',
          zIndex: 9999
        }}
        apiKey={TOKEN}
        debounce={500}
        autocompletionRequest={{
          componentRestrictions: {
            country: 'in'
          },
          location: position,
          radius: 5
        }}
        withSessionToken
      />
    </>
  )
}
