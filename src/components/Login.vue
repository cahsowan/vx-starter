<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div v-if="error" class="alert alert-danger">{{ errorMsg }}</div>

      <h3>Auth</h3>

      <div v-if="$route.query.redirect" class="alert alert-info">
        <p>You need to login first.</p>
      </div>

      <form @submit.prevent="submitForm()">
        <p><input type="text" class="form-control" placeholder="Email" v-model="email"></p>
        <p><input type="password" class="form-control" placeholder="Password" v-model="password"></p>
        <p><button class="btn btn-success">Login</button></p>
      </form>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
import auth from '../auth';
export default {
  data() {
    return {
      email: '',
      password: '',
      error: false,
      errorMsg: '',
    };
  },

  methods: {
    submitForm() {
      const creds = {
        email: this.email,
        password: this.password,
      };

      auth.login(this, creds);

      // clear form
      this.email = '';
      this.password = '';
    },
  },
};
</script>