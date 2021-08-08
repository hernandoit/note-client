// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

$(() => {
  // NAVBAR LINKS //
  $('#register-nav').on('click', authEvents.onShowRegister)
  $('#login-nav').on('click', authEvents.onShowLogin)
  $('#account-nav').on('click', authEvents.onShowAccount)
  // $('#add-note-nav').on('click', authEvents.onAddNote)

  // FORMS //
  $('#register').on('submit', authEvents.onRegister)
  $('#login').on('submit', authEvents.onLogin)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-note').on('submit', authEvents.onCreateNote)
  $('#read-note').on('submit', authEvents.onReadNote)
  $('#update-note').on('submit', authEvents.onUpdateNote)

  // LINKS //
  // no form attached, nothing to submit/ regular click event
  $('#logout').on('click', authEvents.onLogout)
  // $('#destroy-note').on('click', authEvents.onDestroyNote)
  $('#change-password-btn').on('click', authEvents.onShowChangePassword)
  $('#change-password-cancel').on('click', () => {

  })

  // default visibility states
  $('#register').hide()
  $('#login').hide()
  $('#change-password').hide()
  $('#account').hide()
  $('#account-nav').hide()
  // $('#note').hide()
  $('#add-note-nav').hide()
})

// ORDERING/ STRUCTURE
// register
// login
// change-password
// auth-message
// account
// note

// change password cancel  // account cancel //  dismisses the user’s current screen and brings them back to their previous screen.
