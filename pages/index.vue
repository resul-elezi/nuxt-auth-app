<template>
  <div>
    <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
      <div class="flex flex-col gap-1">
          <InputText name="email" type="text" placeholder="Email" />
          <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message>
      </div>
      <Button type="submit" severity="secondary" label="Submit" />
  </Form>
  </div>
</template>

<script setup>
import { Form } from '@primevue/forms';
import Button from 'primevue/button';

// export default {

// }
</script>

<style>

</style>