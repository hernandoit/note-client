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
  onShowUsersNotes,
  onCreateNote,
  onUpdateNote,
  onDestroyNote
}
