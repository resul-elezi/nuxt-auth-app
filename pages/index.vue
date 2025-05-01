<template>
  <div class="container">
    <h1>Welcome to my site</h1>
    <Button label="Create account"/>
    <Button label="Login" href="/pages/login.vue"/>
  </div>
</template>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
button {
  margin-left: 1rem;
}
</style>
