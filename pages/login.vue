<template>
    <div class="p-4">
      <h2>Login</h2>
      <div class="p-field">
        <label for="username">Username</label>
        <InputText v-model="username" id="username" />
      </div>
      <div class="p-field">
        <label for="password">Password</label>
        <Password v-model="password" id="password" toggleMask />
      </div>
      <Button label="Login" @click="login" />
      <Toast />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login() {
        try {
          const res = await this.$axios.$post('/api/login', {
            username: this.username,
            password: this.password
          })
          this.$toast.add({ severity: 'success', summary: 'Login successful' })
          // speichere token lokal oder navigiere weiter
        } catch (err) {
          this.$toast.add({ severity: 'error', summary: 'Login failed' })
        }
      }
    }
  }
  </script>
  