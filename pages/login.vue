<template>
    <div class="login-container">
      <Card style="max-width: 400px; margin: auto; margin-top: 100px;">
        <template #title>Login</template>
        <template #content>
          <form @submit.prevent="handleLogin">
            <div class="p-fluid">
              <label for="email">E-Mail</label>
              <InputText id="email" v-model="email" type="email" required />
  
              <label for="password" class="mt-3">Passwort</label>
              <Password id="password" v-model="password" toggleMask feedback="false" required />
  
              <Button label="Login" class="mt-4" type="submit" />
            </div>
          </form>
        </template>
      </Card>
    </div>
  </template>
  
  <script setup>
  // Import PrimeVue-Komponenten
  import { ref } from 'vue'
  import InputText from 'primevue/inputtext'
  import Password from 'primevue/password'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  async function handleLogin() {
    try {
      const { data, error } = await useFetch('/api/login', {
        method: 'POST',
        body: { email: email.value, password: password.value }
      })
  
      if (error.value) {
        alert('Login fehlgeschlagen.')
        return
      }
  
      // Token speichern (z. B. im localStorage)
      localStorage.setItem('token', data.value.token)
  
      // Weiterleitung nach dem Login
      router.push('/dashboard')
    } catch (err) {
      console.error(err)
      alert('Fehler beim Login.')
    }
  }
  </script>
  