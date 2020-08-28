import { SIGN_IN, SIGN_OUT } from '../actions/type'

export default (auth = { isSignedIn: null, userId: null  } ,action) => {
  switch (action.type) {
    case SIGN_IN:
      return {...auth, isSignedIn: true, userId: action.payload.userId };
    case SIGN_OUT:
      return {...auth, isSignedIn: false, userId: null };
    default:
      return auth
  }
}