import { SIGN_IN, SIGN_OUT } from './type'

export const signIn = (useId) => {
  return {
    type: SIGN_IN,
    payload: { useId: useId }
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}