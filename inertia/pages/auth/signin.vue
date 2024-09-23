<template>
  <Layout>
    <div class="auth-box">
      <div class="form-title">
        <h3>Inscription</h3>
      </div>
      <form @submit.prevent="form.post('/signin')">
        <InputGroup
          v-model="form.email"
          type="email"
          name="email"
          label="Adresse mail"
          :error="form.errors.email"
        />
        <InputGroup
          v-model="form.username"
          type="text"
          name="username"
          label="Nom d'utilisateur"
          :error="form.errors.username"
        />
        <InputGroup
          v-model="form.password"
          type="password"
          name="password"
          label="Mot de passe"
          :error="form.errors.password"
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
