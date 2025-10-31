<template>
  <Head>
    <title>Inscription</title>
  </Head>
  <form class="flex flex-col flex-1 justify-center items-center mt-10" @submit.prevent="form.post('/signin')">
    <Card class="w-96">
      <CardHeader class="text-center">
        <CardTitle>Inscription</CardTitle>
      </CardHeader>
      <CardContent>
        <FormInput v-model="form.email" type="email" name="email" label="Adresse mail" :error="form.errors.email" />
        <FormInput
          v-model="form.username"
          type="text"
          name="username"
          label="Nom d'utilisateur"
          :error="form.errors.username"
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
        <Button class="w-full">S'inscrire</Button>
      </CardFooter>
    </Card>
  </form>
</template>

<script setup lang="ts">
  import { useForm, Head } from '@inertiajs/vue3'
  import type { UserForm } from '@/types'
  import AuthLayout from '@/layouts/AuthLayout.vue'
  import FormInput from '@/components/form/FormInput.vue'
  import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
  import { Button } from '@/components/ui/button'

  defineOptions({ layout: AuthLayout })

  const form = useForm<UserForm>({
    email: '',
    username: '',
    password: '',
  })
</script>
