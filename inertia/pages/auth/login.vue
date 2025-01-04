<template>
  <Layout>
    <form
      class="flex flex-col flex-1 justify-center items-center mt-10"
      @submit.prevent="form.post('/login')"
    >
      <Card class="w-96">
        <CardHeader class="text-center">
          <CardTitle>Connexion</CardTitle>
        </CardHeader>
        <CardContent>
          <FormInput
            v-model="form.email"
            type="email"
            name="email"
            label="Adresse mail"
            :error="form.errors.email"
          />
          <FormInput
            v-model="form.password"
            type="password"
            name="password"
            label="Mot de passe"
            :error="form.errors.password"
          />
        </CardContent>
        <CardFooter class="flex justify-center">
          <Button class="w-full">Se connecter</Button>
        </CardFooter>
      </Card>
    </form>
  </Layout>
</template>

<script setup lang="ts">
  import { useForm } from '@inertiajs/vue3'
  import type { UserForm } from '@/types'
  import Layout from '@/layouts/AppLayout.vue'
  import FormInput from '@/components/form/FormInput.vue'
  import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
  import { Button } from '@/components/ui/button'

  const form = useForm<UserForm>({
    email: '',
    username: '',
    password: '',
  })
</script>
