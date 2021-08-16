// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const showEvents = require('./auth/ui')

$(() => {
  // NAVBAR LINKS //
  $('#register-nav').on('click', authEvents.onShowRegisterForm)
  $('#login-nav').on('click', authEvents.onShowLoginForm)
  $('#account-nav').on('click', authEvents.onShowAccountForm)

  // FORMS //
  $('#register').on('submit', authEvents.onRegister)
  $('#login').on('submit', authEvents.onLogin)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-note').on('submit', authEvents.onCreateNote)
  $('#update-note').on('submit', authEvents.onUpdateNote)
  $('#destroy-note').on('submit', authEvents.onDestroyNote)

  // LOGGED IN NAVIGATION BUTTONS FOR FORMS //
  $('#create-btn').on('click', authEvents.onShowCreateNote)
  $('#show-btn').on('click', authEvents.onShowUsersNotes)
  $('#update-btn').on('click', authEvents.onShowUpdateNoteForm)
  $('#destroy-btn').on('click', authEvents.onShowDestroyNoteForm)

  // LINKS //
  // no form attached, nothing to submit/ regular click event
  $('#logout').on('click', authEvents.onLogout)
  $('#change-password-btn').on('click', authEvents.onShowChangePassword)

  // default visibility states
  $('#register').hide()
  $('#login').show()
  $('#change-password').hide()

  $('#account').hide()
  $('#account-nav').hide()

  $('#btn-nav').hide()
  $('#create-note').hide()
  $('#show-note').hide()
  $('#update-note').hide()
  $('#destroy-note').hide()
})
