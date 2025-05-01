<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <FloatLabel variant="on">
        <InputText id="on_label" v-model="value3" />
        <label for="on_label">On Label</label>

      </FloatLabel>
      <!-- Password für Passwort -->
      <!-- Button zum Absenden -->
    </form>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'

import { Password } from 'primevue/password'
import { Button } from 'primevue/button'

export default {
  components: {
    InputText,
    Password,
    Button
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // Hier später: API-Aufruf
      console.log('Login attempt:', this.email, this.password)
    }
  }
}
</script>

  