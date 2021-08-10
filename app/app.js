// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

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
  // $('#read-note').on('submit', authEvents.onShowNote)
  $('#update-note').on('submit', authEvents.onUpdateNote)
  $('#destroy-note').on('submit', authEvents.onDestroyNote)

  // LOGGED IN NAVIGATION BUTTONS FOR FORMS //
  $('#create-btn').on('click', authEvents.onShowCreateNote)
  $('#show-btn').on('click', authEvents.onShowUsersNotes)
  $('#update-btn').on('click', authEvents.onShowUpdateNoteForm)
  $('#destroy-btn').on('click', authEvents.onShowDestroyNoteForm)

  // VERSION 2.0 FEATURE //
  // $('#index-btn').on('click', authEvents.onShowNotes)

  // LINKS //
  // no form attached, nothing to submit/ regular click event
  $('#logout').on('click', authEvents.onLogout)
  $('#change-password-btn').on('click', authEvents.onShowChangePassword)

  // default visibility states
  $('#register').hide()
  $('#login').hide()
  $('#change-password').hide()

  // $('#display-notes').hide()

  $('#account').hide()
  $('#account-nav').hide()

  // $('#add-note-nav').hide()
  $('#btn-nav').hide()
  $('#create-note').hide()
  $('#show-note').hide()
  $('#update-note').hide()
  $('#destroy-note').hide()
})

// ORDERING/ STRUCTURE
// register
// login
// change-password
// auth-message
// account
// note

// $('#change-password-cancel').on('click', () => {})
// change password cancel  // account cancel //  dismisses the user’s current screen and brings them back to their previous screen.

// reset the form fields when not completed or on fail
