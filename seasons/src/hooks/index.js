import React, { useState, useEffect } from 'react';

export const useLocation = () => {
  const [lat, setLat] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat({lat: position.coords.latitude}),
      err => setError({error: err.message}),
    )
  },[])

  return {lat, error}
}