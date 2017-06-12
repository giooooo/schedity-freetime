# Services

Services must mirror the controllers of the Backend API

  This function returns a promise.
  When this function is called in a component, this is the format:

  import AuthService from '/to/path/of/AuthService';

  AuthService
    .login(data)
    .then(response => {
      handle success
    })
    .catch(err => {
      //handle error
    });
