<template>
  <header>
    <div class="header-navbar-left">
      <Link class="header-navbar-link" href="/">Projet</Link>
    </div>
    <ul class="header-navbar-right">
      <li v-if="isAuth" class="header-navbar-item">
        <Link class="header-navbar-link" href="/menu1">Menu 1</Link>
      </li>
      <li v-if="isAuth" class="header-navbar-item">
        <Link class="header-navbar-link" href="/menu2">Menu 2</Link>
      </li>
      <li v-if="isAuth" class="header-navbar-item">
        <Link class="header-navbar-link" href="/menu3">Menu 3</Link>
      </li>
      <li v-if="isAuth" class="header-navbar-item">
        <Link class="header-navbar-link" href="/logout">Déconnexion</Link>
      </li>
      <li v-if="!isAuth" class="header-navbar-item">
        <Link class="header-navbar-link" href="/login">Connexion</Link>
      </li>
      <li v-if="!isAuth" class="header-navbar-item">
        <Link class="header-navbar-link" href="/signin">Inscription</Link>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Link, usePage } from '@inertiajs/vue3'
  import type { InertiaProps } from '@/types'

  const isAuth = computed(() => usePage<InertiaProps>().props.isAuth)
</script>

<style scoped>
  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 3em;
    background-color: #164a41;
  }

  .header-navbar-left {
    display: flex;
    align-items: center;
    padding-left: 1em;
  }

  .header-navbar-right {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .header-navbar-item {
    padding: 0em 1em;
    list-style: none;
  }

  .header-navbar-link {
    color: #e7edf8;
    text-decoration: none;
  }
</style>
