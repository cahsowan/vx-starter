import auth from './auth';

function intercept(request, next) {
  if (auth.loggedIn()) {
    request.headers = Object.assign({}, request.headers, auth.getAuthHeader());
  }

  // continue to next interceptor
  next((response) => {
    if (response.status === 403) {
      this.$dispatch('user_no_access');
    }

    if ([401, 500].includes(response.status)) {
      auth.logout();
      this.$dispatch('user_session_end');
    }
  });
}

export { intercept as default };
