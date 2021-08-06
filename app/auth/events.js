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
    .catch()
}

const onLogin = (e) => {
  e.preventDefault()

  const form = e.target
  const data = getFormFields(form)

  api.login(data)
    .then(ui.onLoginSuccess)
    .catch()
}
// we don't pass the (e) event because we already have the token and there is nothing to submit
const onLogout = () => {
  api.logout()
    .then(ui.onLogoutSuccess)
    .catch()
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
    .catch()
}

module.exports = {
  onRegister,
  onLogin,
  onLogout,
  onChangePassword
}
