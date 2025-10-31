<template>
  <Head>
    <title>Accueil</title>
  </Head>
  <div class="flex flex-1 justify-center mt-16">
    <h1>Home Page - {{ props.title }}</h1>
  </div>
</template>

<script setup lang="ts">
  import { Head } from '@inertiajs/vue3'

  const props = defineProps<{ title: string }>()
</script>
