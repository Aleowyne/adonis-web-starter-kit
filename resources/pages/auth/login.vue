<template>
  <Layout>
    <div class="auth-box">
      <div class="form-title">
        <h3>Connexion</h3>
      </div>
      <form @submit.prevent="form.post('/login')">
        <InputGroup
          type="email"
          name="email"
          label="Adresse mail"
          v-model="form.email"
          :errors="form.errors.email"
        />
        <InputGroup
          type="password"
          name="password"
          label="Mot de passe"
          v-model="form.password"
          :errors="form.errors.password"
        />
        <Button label="Se connecter" />
      </form>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import type { UserForm } from '@/types'
import Layout from '@/layouts/default.vue'
import InputGroup from '@/components/form/input_group.vue'
import Button from '@/components/form/button.vue'

const form = useForm<UserForm>({
  email: '',
  username: '',
  password: '',
})
</script>
