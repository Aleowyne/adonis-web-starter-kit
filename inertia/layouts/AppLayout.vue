<template>
  <div class="flex flex-col min-h-full">
    <div class="fixed w-full top-0 left-0 z-10">
      <header class="flex justify-between border-b border-border bg-background">
        <NavigationMenu class="ml-7">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/"
                class="hover:text-muted-foreground hover:bg-background focus:bg-background"
                :class="navigationMenuTriggerStyle()"
              >
                Projet
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu class="mr-7">
          <NavigationMenuList>
            <NavigationMenuItem v-for="link in links" :key="link.name">
              <Link
                v-if="page.props.isAuth === link.auth"
                :href="link.url"
                class="hover:text-muted-foreground hover:bg-background focus:bg-background"
                :class="navigationMenuTriggerStyle()"
              >
                {{ link.name }}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </div>
    <slot />
    <Footer />
    <Toaster />
  </div>
</template>

<script setup lang="ts">
  import { watch, ref } from 'vue'
  import { usePage, Link } from '@inertiajs/vue3'
  import Footer from '@/components/Footer.vue'
  import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    navigationMenuTriggerStyle,
  } from '@/components/ui/navigation-menu'
  import { Toaster, useToast } from '@/components/ui/toast'
  import { SharedProps } from '@adonisjs/inertia/types'

  const page = usePage<SharedProps>()

  const links = ref([
    { name: 'Menu 1', url: '/menu1', auth: true },
    { name: 'Menu 2', url: '/menu2', auth: true },
    { name: 'Menu 3', url: '/menu3', auth: true },
    { name: 'Déconnexion', url: '/logout', auth: true },
    { name: 'Connexion', url: '/login', auth: false },
    { name: 'Inscription', url: '/signin', auth: false },
  ])

  const { toast } = useToast()

  watch(
    () => page.props.message,
    (newValue) => {
      if (newValue.type) {
        toast({
          description: newValue.description,
          variant: newValue.type === 'error' ? 'destructive' : 'default',
        })
      }
    }
  )
</script>
