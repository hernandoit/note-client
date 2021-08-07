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
// create note
const createNote = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}
// destroy note
const destroyNote = () => {
  return $.ajax({
    url: config.apiUrl + '/note',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
// update note
const updateNote = (passwords) => {
  return $.ajax({
    url: config.apiUrl + '/notes',
    method: 'PATCH',
    data: passwords,
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
// show note
const showNotes = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'GET',
    data
  })
}
module.exports = {
  register,
  login,
  logout,
  changePassword,
  createNote,
  destroyNote,
  updateNote,
  showNotes
}
