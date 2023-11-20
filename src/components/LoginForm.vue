<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button id="submit_btn" type="submit">Submit</button>
  </form>
  <span class="error-message" v-if="showError">Error Occured</span>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      showError: false
    }
  },
  methods: {
    handleSubmit () {
      if ( this.email == "" || this.password == "" ) {
        this.showError = true
        return
      }
      // Do something with the credentials, such as sending them to a server
      console.log( {
        email: this.email,
        password: this.password
      } )
    }
  }
}
</script>