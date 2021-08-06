const store = require('./../store')

const onRegisterSuccess = (response) => {
  $('#register').trigger('reset')
  $('#register').hide()
  $('#login').show()
  $('#logout').hide()
  $('#change-password').hide()
  // $('#btn-change-password').hide()
  $('#auth-message').text(`${response.user.email} is now registered, please login to access your account`)
}

const onLoginSuccess = (response) => {
  $('#register').hide()
  $('#login').trigger('reset')
  $('#login').hide()
  $('#logout').show()
  $('#change-password').hide()
  // $('#btn-change-password').show()
  $('#auth-message').text(`${response.user.email} is now logged in`)
  store.token = response.user.token
  store.password = response.password
}

const onLogoutSuccess = () => {
  $('#register').hide()
  $('#login').show()
  $('#logout').hide()
  $('#change-password').hide()
  // $('#btn-change-password').hide()
  $('#auth-message').text('You have been successfully logged out, come back soon!')
}

const onChangePasswordSuccess = () => {
  $('#register').hide()
  $('#login').show()
  $('#logout').hide()
  $('#change-password').hide()
  $('#auth-message').text('Your password has been successfully changed, please login again!')
}

module.exports =
 {
   onRegisterSuccess,
   onLoginSuccess,
   onLogoutSuccess,
   onChangePasswordSuccess
 }
// register
// login
// logout
// change-password
// auth-message
