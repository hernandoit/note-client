const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')

const onRegister = (e) => {
  // prevents the click event from refreshing the page
  e.preventDefault()
  // get info from event and form
  const form = e.target
  const data = getFormFields(form)
  // make an api call using ajax
  api
    .register(data)
    // handle successful API calls with .then
    .then(ui.onRegisterSuccess)
    // Handle failed API calls with .catch
    .catch(ui.onRegisterFailure)
}

const onLogin = (e) => {
  e.preventDefault()

  const form = e.target
  const data = getFormFields(form)

  api.login(data)
    .then(ui.onLoginSuccess)
    .catch(ui.onLoginFailure)
}
// we don't pass the (e) event because we already have the token and there is nothing to submit
const onLogout = () => {
  api.logout()
    .then(ui.onLogoutSuccess)
    .catch(ui.onLogoutFailure)
}

const onChangePassword = (e) => {
  e.preventDefault()

  const form = e.target
  const data = getFormFields(form)

  const passwords = {
    passwords: {
      old: data.passwords.old,
      new: data.passwords.new
    }
  }
  api.changePassword(passwords)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

// NAVBAR //
const onShowRegister = () => {
  $('#register').show()
  $('#login').hide()
  $('#change-password').hide()
}

const onShowLogin = () => {
  $('#register').hide()
  $('#login').show()
  $('#change-password').hide()
}

const onShowChangePassword = () => {
  $('#register').hide()
  $('#login').hide()
  $('#change-password').show()
  $('#account').hide()
  $('#note').hide()
}

const onShowAccount = () => {
  $('#register').hide()
  $('#login').hide()
  $('#change-password').hide()
  $('#account').show()
  $('#note').hide()
}
// IM HERE //
const onAddNote = () => {

}

const onDeleteNote = () => {

}

module.exports = {
  onRegister,
  onLogin,
  onLogout,
  onChangePassword,
  onShowRegister,
  onShowLogin,
  onShowChangePassword,
  onShowAccount,
  onAddNote,
  onDeleteNote
}

// ORDERING/ STRUCTURE
// register
// login
// change-password
// auth-message
// account
// note
