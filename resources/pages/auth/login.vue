<template>
  <Layout :message="props.message" :isAuthenticated="false">
    <div class="auth-box">
      <div class="auth-title">
        <h3>Connexion</h3>
      </div>
      <form @submit.prevent="form.post('/login')">
        <div class="auth-form-group">
          <label for="email">Adresse mail</label>
          <input type="text" id="email" v-model="form.email" />
          <div class="form-error">
            <p v-if="form.errors.email">{{ form.errors.email[0] }}</p>
          </div>
        </div>
        <div class="auth-form-group">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" v-model="form.password" />
          <div class="form-error">
            <p v-if="form.errors.password">{{ form.errors.password[0] }}</p>
          </div>
        </div>
        <button type="submit" class="auth-button">Se connecter</button>
      </form>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import type { UserForm, Message } from '@/types'
import Layout from '@/layouts/default.vue'

const props = defineProps<Message>()

const form = useForm<UserForm>({
  email: '',
  username: '',
  password: '',
  _csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
})
</script>
