<template>
  <div>
    <v-flex>
          <v-form v-model="valid" @submit.prevent="onSubmit">

            <v-text-field
            v-model="currentUser.email"
            :rules="emailRules"
            label="E-mail"
            color="blue"
            required
            ></v-text-field>

            <v-text-field
            v-model="currentUser.password"
            required
            color="blue"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            name="input-10-1"
            label="Enter your password"
            hint="At least 8 characters"
            min="8"
            ></v-text-field>

            <v-btn flat type="submit">{{ isLogin ? 'Login' : 'Sign Up'}}</v-btn>
            <v-btn flat @click="isLogin = !isLogin"> Switch to {{isLogin ? 'SignUp' : 'Login' }}</v-btn>
        </v-form>
    </v-flex>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      currentUser: {
        email: "",
        password: ""
      },
      isLogin: true,
      valid: false,
      e1: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ]
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authenticate', {
        email: this.currentUser.email,
        password: this.currentUser.password,
        isLogin: this.isLogin
      }).then(response => {
        console.log(response)
        this.$router.push('/admin')
      })
    }
  }
};
</script>

<style>
</style>
