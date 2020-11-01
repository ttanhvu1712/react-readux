import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';
import Seasons from './components/Seasons'
import Spiner from './components/Spiner'
import { useLocation } from './hooks'

const App = () => {
  const{ lat, error } = useLocation()

  const renderContent = () => {
    if(lat && error === '')
      return ( <Seasons lat={lat}/> )
    else if(!lat && error !== '')
      return ( <div> error: {error} </div> )
    else return ( <Spiner message="Please accept location request"/> )
  }

  return (
    <div style={{border:"1px red"}}>
      { renderContent() }
    </div>
  )
}

ReacDOM.render(<App/>, document.querySelector('#root'))