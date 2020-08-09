import React from 'react';
import ReacDOM from 'react-dom';
import Seasons from './components/Seasons'

class App extends React.Component {
  state = { lat: null, error: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({error: err.message}),
    )
  }

  render() {
    const {lat, error} = this.state;
    if(lat && error === '')
      return ( <Seasons lat={lat}/> )
    else if(!lat && error !== '')
      return ( <div> error: {error} </div> )
    else return ( <div> loading </div>)
  }
}

ReacDOM.render(<App/>, document.querySelector('#root'))