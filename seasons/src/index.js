import React from 'react';
import ReacDOM from 'react-dom';
import Seasons from './components/Seasons'
import Spiner from './components/Spiner'

class App extends React.Component {
  state = { lat: null, error: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({error: err.message}),
    )
  }

  renderContent() {
    const {lat, error} = this.state;
    if(lat && error === '')
      return ( <Seasons lat={lat}/> )
    else if(!lat && error !== '')
      return ( <div> error: {error} </div> )
    else return ( <Spiner message="Please accept location request"/> )
  }

  render() {
    return (
      <div style={{border:"1px red"}}>
        { this.renderContent() }
      </div>
    )
  }
}

ReacDOM.render(<App/>, document.querySelector('#root'))