<template>
  <navbar :logged-in="loggedIn" :display-name="displayName"></navbar>
  <div class="main container">
    <router-view></router-view>
  </div>
</template>

<script>
import $ from 'jquery';
window.$ = window.jQuery = $;
// we must use require instead of import here, (DON'T KNOW WHY)
require('bootstrap');

import auth from './auth';
import Navbar from './components/Navbar.vue';

export default {
  ready() {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn;
      this.displayName = auth.getDisplayName();
    };

    this.$on('user_no_access', () => {
      this.$router.go('/forbidden');
    });

    this.$on('user_session_end', () => {
      this.$router.go('/login');
    });
  },
  data() {
    return {
      loggedIn: auth.loggedIn(),
      displayName: auth.getDisplayName(),
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="less">
@import '../node_modules/bootstrap/less/bootstrap';
@import '../node_modules/font-awesome/less/font-awesome';
</style>
