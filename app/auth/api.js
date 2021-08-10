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

const createNote = (note) => {
  return $.ajax({
    url: config.apiUrl + '/notes',
    method: 'POST',
    data: note,
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const showNote = () => {
  return $.ajax({
    url: config.apiUrl + '/notes',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const updateNote = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/notes/' + data.note.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const destroyNote = (data) => {
  return $.ajax({
    url: config.apiUrl + '/notes/' + data.note.id,
    method: 'DELETE',
    data,
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

module.exports = {
  register,
  login,
  logout,
  changePassword,
  createNote,
  showNote,
  updateNote,
  destroyNote
}
