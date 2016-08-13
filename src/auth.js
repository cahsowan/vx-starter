export default {
  login(context, creds) {
    const redirect = context.$route.query.redirect || '/';

    context.$http.post('api/auth/login', creds).then(
      (response) => {
        localStorage.token = response.data.token;
        localStorage.display_name = response.data.display_name;
        this.onChange(true);
        context.$router.go(redirect);
      },
      (error) => {
        context.$set('error', true);
        context.$set('errorMsg', error.data);
      }
    );
  },

  logout() {
    delete localStorage.token;
    delete localStorage.display_name;
    this.onChange(false);
  },

  loggedIn() {
    return !!localStorage.token;
  },

  getDisplayName() {
    return localStorage.display_name;
  },

  getAuthHeader() {
    return {
      Authorization: `Bearer ${localStorage.token}`,
    };
  },

  onChange() {},
};
