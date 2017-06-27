import fetch from 'isomorphic-fetch'
import localforage from 'localforage'

export const ADD_TOKEN = 'ADD_TOKEN'
export const ADD_USER_INFO = 'ADD_USER_INFO'

function addToken (token) {
  return {
    type: ADD_TOKEN,
    token
  }
}

function addUserInfo (userInfo) {
  return {
    type: ADD_USER_INFO,
    userInfo
  }
}

export function retrieveTokenFromLocalStorage () {
  return dispatch => {
    return localforage.getItem('token')
    .then((token) => {
      if (token) dispatch(addToken(token))
      return token
    })
    .catch(err => {
      console.error(err)
    })
  }
}

export function saveTokenToLocalStorage (token) {
  return dispatch => {
    return localforage.setItem('token', token)
    .then((tokenAdded) => {
      if (tokenAdded) dispatch(addToken(tokenAdded))
      return tokenAdded
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function appInit () {
  return dispatch => {
    return dispatch(retrieveTokenFromLocalStorage())
    .then(token => token)
  }
}
