import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {

  onAuthChange = (isSignedIn) => {
    const { signIn, signOut }  = this.props;
    const userId = this.auth.currentUser.get().getId();
    (isSignedIn) ? signIn(userId) : signOut();
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSingOutClick = () => {
    this.auth.signOut();
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: "315867440371-fi2uprtc8va9v0vpn2hd3j9o0c7ojac3.apps.googleusercontent.com",
        scope: "email"
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.auth.isSignedIn.listen(this.onAuthChange);
        this.onAuthChange(this.auth.isSignedIn.get());
      })
    })
  }

  renderAuthButton(){
    const { isSignedIn } = this.props.auth;
    if( isSignedIn === null ) {
      return <div> I dont know if we are sign in </div>
    } else if ( isSignedIn ) {
      return (
        <button className='ui red google button' onClick={this.onSingOutClick}>
          <i className='google icon' />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className='ui blue google button' onClick={this.onSignInClick}>
          <i className='google icon' />
          Sign In with Google
        </button>
      )
    }
  }

  render() {
    return (
    <div> {this.renderAuthButton()} </div>
    )
  }
}


export default connect(({auth}) => ({auth}), { signIn, signOut })(GoogleAuth)
