// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

$(() => {
  // link to our events.js logic
  $('#register').on('submit', authEvents.onRegister)
  $('#login').on('submit', authEvents.onLogin)
  // no form attached, nothing to submit
  $('#logout').on('click', authEvents.onLogout)
  $('#change-password').on('submit', authEvents.onChangePassword)
})
