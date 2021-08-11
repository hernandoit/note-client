const store = require('./../store')

const onRegisterSuccess = (response) => {
  $('#register').trigger('reset')
  $('#register').hide()
  $('#register-nav').hide()
  $('#login').show()
  $('#login-nav').show()
  $('#change-password').hide()
  $('#auth-message').text(`${response.user.email} is now registered, please login to access your account`)
  $('#account').hide()
  $('#account-nav').hide()
  $('#note').hide()
  $('#add-note-nav').hide()
  $('#btn-nav').hide()
  $('.note').hide()
}

const onRegisterFailure = () => {
  $('#register').trigger('reset')
  $('#register').show()
  $('#register-nav').show()
  $('#login').hide()
  $('#login-nav').show()
  $('#change-password').hide()
  $('#auth-message').text('Sign Up Failed, please try again!')
  $('#account').hide()
  $('#account-nav').hide()
  $('.note').hide()
  $('#add-note-nav').hide()
  $('#btn-nav').hide()
}

const onLoginSuccess = (response) => {
  $('#register').hide()
  $('#register-nav').hide()
  $('#login').trigger('reset')
  $('#login').hide()
  $('#login-nav').hide()
  $('#change-password').hide()
  $('#auth-message').text(`${response.user.email} is now logged in`)
  $('#account').hide()
  $('#account-nav').show()
  $('#note').show()
  $('#add-note-nav').show()
  $('#btn-nav').show()
  $('.note').hide()
  store.token = response.user.token
  store.user = response.user
}

const onLoginFailure = () => {
  $('#register').hide()
  $('#register-nav').show()
  $('#login').trigger('reset')
  $('#login').show()
  $('#login-nav').show()
  $('#change-password').hide()
  $('#auth-message').text('Log In Failed, please try again!')
  $('#account').hide()
  $('#account-nav').hide()
  $('.note').hide()
  $('#add-note-nav').hide()
  $('#btn-nav').hide()
}

const onLogoutSuccess = () => {
  $('#register').hide()
  $('#register-nav').show()
  $('#login').hide()
  $('#login-nav').show()
  $('#change-password').hide()
  $('#auth-message').text('You have been successfully logged out, come back soon!')
  $('#account').hide()
  $('#account-nav').hide()
  $('#note').hide()
  $('#add-note-nav').hide()
  $('#btn-nav').hide()
  $('.note').hide()
}

const onLogoutFailure = () => {
  $('#register').hide()
  $('#register-nav').hide()
  $('#login').hide()
  $('#login-nav').hide()
  $('#change-password').hide()
  $('#auth-message').text('Something unexpected happened, refresh your browser!')
  $('#account').hide()
  $('#account-nav').hide()
  $('#note').hide()
  $('#add-note-nav').hide()
  $('#btn-nav').hide()
  $('.note').hide()
}

const onChangePasswordSuccess = () => {
  $('#register').hide()
  $('#register-nav').hide()
  $('#login').show()
  $('#login-nav').show()
  $('#change-password').hide()
  $('#auth-message').text('Your password has been successfully changed, please login again!')
  $('#account').hide()
  $('#account-nav').hide()
  $('#note').hide()
  $('#add-note-nav').hide()
  $('.note').hide()
}

const onChangePasswordFailure = () => {
  $('#register').hide()
  $('#register-nav').hide()
  $('#login').hide()
  $('#login-nav').hide()
  $('#change-password').show()
  $('#auth-message').text('Unable to change password please try again!')
  $('#account').hide()
  $('#account-nav').show()
  $('.note').hide()
}

const onCreateNoteSuccess = (response) => {
  $('#create-note').trigger('reset')
  $('#auth-message').text('Note has been created successfully')
}

const onCreateNoteFailure = () => {
  $('#auth-message').text('Unable to create Note')
}

const onShowNoteSuccess = (response) => {
  $('#create-note').hide()
  $('#update-note').hide()
  $('#account-form').hide()
  $('#display-notes').show()
  $('#auth-message').text('Showing users created Notes')

  const notes = response.notes

  let noteHtml = ''

  notes.forEach((note) => {
    noteHtml += `<p>ID: ${note._id}</p>
    <h3>Title: ${note.title} </h3>
    <p>Text: ${note.text}</p>
    `
  })

  $('#display-notes').html(noteHtml)
}

const onShowNoteFailure = () => {
  $('#account-form').hide()
  $('#create-note').hide()
  $('#auth-message').text('Unable to show user Notes')
}

const onUpdateNoteSuccess = () => {
  $('#update-note').trigger('reset')
  $('#auth-message').text('Note was updated successfully')
}

const onUpdateNoteFailure = () => {
  $('#auth-message').text('Unable to update the Note')
}

const onDestroyNoteSuccess = () => {
  $('#destroy-note').trigger('reset')
  $('#auth-message').text('Note was successfully deleted')
}

const onDestroyNoteFailure = () => {
  $('#auth-message').text('Unable to delete Note')
}

module.exports = {
  onRegisterSuccess,
  onRegisterFailure,
  onLoginSuccess,
  onLoginFailure,
  onLogoutSuccess,
  onLogoutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onCreateNoteSuccess,
  onCreateNoteFailure,
  onShowNoteSuccess,
  onShowNoteFailure,
  onUpdateNoteSuccess,
  onUpdateNoteFailure,
  onDestroyNoteSuccess,
  onDestroyNoteFailure
}
