<template>
  <div class="container">
    <h1>Welcome to my site</h1>
    <div class="btn-wrapper">
      <Button label="Create account"/>
      <Button label="Login" href="login.vue"/>
    </div>
  </div>
  
</template>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.btn-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
