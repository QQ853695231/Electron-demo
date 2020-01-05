import Cookies from 'js-cookie'

const TokenKey = 'pingankou'

export function getToken() {
  return Cookies.getJSON(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
