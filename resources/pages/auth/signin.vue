<template>
  <Layout>
    <div class="auth-box">
      <div class="form-title">
        <h3>Inscription</h3>
      </div>
      <form @submit.prevent="form.post('/signin')">
        <InputGroup
          type="email"
          name="email"
          label="Adresse mail"
          v-model="form.email"
          :errors="form.errors.email"
        />
        <InputGroup
          type="text"
          name="username"
          label="Nom d'utilisateur"
          v-model="form.username"
          :errors="form.errors.username"
        />
        <InputGroup
          type="password"
          name="password"
          label="Mot de passe"
          v-model="form.password"
          :errors="form.errors.password"
        />
        <Button label="S'inscrire" />
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
