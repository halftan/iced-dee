<template>
  <mu-container>
    <img src="../assets/logo.png">
    <mu-form :model="form" label-position="right" label-width="100">
      <mu-form-item prop="loungeName" label="Lounge">
        <mu-text-field v-model="form.loungeName"></mu-text-field>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">Submit</mu-button>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>

<script>
export default {
  name: 'Lounge',
  data () {
    return {
      form: {
        loungeName: 'public'
      }
    };
  },
  methods: {
    submit () {
      if (this.form.loungeName) {
        this.$router.push(encodeURI('/room/' + this.form.loungeName));
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
