const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
  $('#display-notes').hide()
}

const onShowAccountForm = () => {
  $('#register').hide()
  $('#login').hide()
  $('#change-password').hide()
  $('#account').show()
  $('#create-note').hide()
  $('#display-notes').hide()
  $('#update-note').hide()
  $('#destroy-note').hide()
}
// BUTTONS FORM NAVBAR //
const onShowCreateNote = () => {
  $('#register').hide()
  $('#login').hide()
  $('#change-password').hide()
  $('#account').hide()
  $('#create-note').show()
  $('#show-note').hide()
  $('#update-note').hide()
  $('#destroy-note').hide()
  $('#display-notes').hide()
}

const onShowUpdateNoteForm = () => {
  $('#register').hide()
  $('#login').hide()
  $('#change-password').hide()
  $('#display-notes').show()
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
  $('#display-notes').show()
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

const onShowUsersNotes = (e) => {
  e.preventDefault()
  $('#account').hide()
  $('#change-password').hide()

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
  onShowRegisterForm,
  onShowLoginForm,
  onShowChangePassword,
  onShowAccountForm,
  onShowCreateNote,
  onShowUsersNotes,
  onShowUpdateNoteForm,
  onShowDestroyNoteForm,
  onCreateNote,
  onUpdateNote,
  onDestroyNote
}
