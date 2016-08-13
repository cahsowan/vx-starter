<template>
  <h1>Account Setting</h1>
  <hr>

  <p>Welcome, {{ name }}</p>
</template>

<script>
import auth from '../auth';
export default {
  data() {
    return {
      name: auth.getDisplayName(),
    };
  },
};
</script>