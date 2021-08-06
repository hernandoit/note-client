const store = require('./../store')
const config = require('./../config')

const register = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const login = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const logout = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const changePassword = (passwords) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: passwords,
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

module.exports = {
  register,
  login,
  logout,
  changePassword
}
