<template>
  <h1>About</h1>
  <hr>

  <pre>{{ fruits | json }}</pre>
</template>

<script>
export default {
  data() {
    return {
      fruits: [],
    };
  },

  methods: {
    loadData() {
      this.$http.get('api/fruits').then(
        (respose) => {
          this.$set('fruits', respose.data);
        },
        (error) => {
          // console.log(error);
        }
      );
    },
  },

  route: {
    data() {
      this.loadData();
    },
  },
};
</script>