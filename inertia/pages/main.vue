<template>
  <Layout>
    <div class="flex flex-1 justify-center mt-16">
      <h1>Home Page - {{ props.title }}</h1>
    </div>
  </Layout>
</template>

<script setup lang="ts">
  import Layout from '@/layouts/AppLayout.vue'

  const props = defineProps<{ title: string }>()
</script>
