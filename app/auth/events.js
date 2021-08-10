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

// VERSION 2.0 FEATURE //
// const onLogo = () => {
// // if user is logged in go back to notes home
// // else back to home screen
// }

const onShowRegisterForm = () => {
  $('#register').show()
  $('#login').hide()
  $('#change-password').hide()
}

const onShowLoginForm = () => {
  $('#register').hide()
  $('#login').show()
  $('#change-password').hide()
}

const onShowChangePassword = () => {
  $('#register').hide()
  $('#login').hide()
  $('#change-password').show()
  $('#account').hide()
  $('.note').hide()
}

const onShowAccountForm = () => {
  $('#register').hide()
  $('#login').hide()
  $('#change-password').hide()
  $('#account').show()
  $('#note').hide()
}
// BUTTONS FORM NAVBAR //
const onShowCreateNote = () => {
  $('#register').hide()
  $('#login').hide()
  $('#change-password').hide()
  // $('#display-note').hide()
  $('#account').hide()
  $('#create-note').show()
  $('#show-note').hide()
  $('#update-note').hide()
  $('#destroy-note').hide()
  $('#display-notes').text(' ')
}
// const onShowNote

const onShowUpdateNoteForm = () => {
  $('#register').hide()
  $('#login').hide()
  $('#change-password').hide()
  $('#display-note').show()
  $('#account').hide()
  $('#create-note').hide()
  $('#show-note').show()
  $('#update-note').show()
  $('#destroy-note').hide()
}

const onShowDestroyNoteForm = () => {
  $('#register').hide()
  $('#login').hide()
  $('#change-password').hide()
  $('#display-note').hide()
  $('#account').hide()
  $('#create-note').hide()
  $('#show-note').hide()
  $('#update-note').hide()
  $('#destroy-note').show()
}

const onCreateNote = (e) => {
  e.preventDefault()

  const form = e.target
  const data = getFormFields(form)

  const notes = {
    note: {
      text: data.note.text,
      title: data.note.title
    }
  }

  api.createNote(notes)
    .then(ui.onCreateNoteSuccess)
    .catch(ui.onCreateNoteFailure)
}
// VERSION 2.0 SHOW ALL USERS NOTES FEATURE //
// const onShowNotes = (e) => {
//   e.preventDefault()

//   api.showNotes()
//     .then(ui.onShowNotesSuccess)
//     .catch(ui.onShowNotesFailure)
// }

const onShowUsersNotes = (e) => {
  e.preventDefault()

  api.showNote()
    .then(ui.onShowNoteSuccess)
    .catch(ui.onShowNoteFailure)
}

const onUpdateNote = (e) => {
  e.preventDefault()

  const form = e.target
  const data = getFormFields(form)

  api.updateNote(data)
    .then(ui.onUpdateNoteSuccess)
    .catch(ui.onUpdateNoteFailure)
}

const onDestroyNote = (e) => {
  e.preventDefault()

  const form = e.target
  const data = getFormFields(form)

  api.destroyNote(data)
    .then(ui.onDestroyNoteSuccess)
    .catch(ui.onDestroyNoteFailure)
}

module.exports = {
  onRegister,
  onLogin,
  onLogout,
  onChangePassword,
  // onLogo,
  onShowRegisterForm,
  onShowLoginForm,
  onShowChangePassword,
  onShowAccountForm,
  onShowCreateNote,
  onShowUsersNotes,
  onShowUpdateNoteForm,
  onShowDestroyNoteForm,
  onCreateNote,
  // onShowNotes,
  onUpdateNote,
  onDestroyNote
}

// ORDERING/ STRUCTURE
// register
// login
// change-password
// auth-message
// account
// note
