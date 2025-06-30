<script setup lang="ts">
const navigation = [
  { name: 'Solutions', path: '/clients/solutions' },
  { name: 'Billings', path: '/clients/billings' },
  { name: 'Settings', path: '/clients/settings' },
]

const { isLoaded, isSignedIn, user } = useUser()

</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="flex gap-2 justify-between">
      <img src="/img/sg-text-logo.png" alt="Status Green Solutioons: Client Portal" class="max-h-20" /> 
      <div class="mr-4 flex items-center">
        {{ user.publicMetadata }}
        <UserButton :showName="true" />
      </div>
    </header>
    <div class="grow-1 flex h-full">
      <nav class="flex flex-col w-[170px] gap-3 p-2">
        <NuxtLink
          v-for="nav in navigation"
          :to="nav.path"
          class="bg-emerald-800 text-white p-2 rounded-md 
                  hover:ring-2 hover:ring-emerald-500 hover:ring-offset-2"
          :class="{'ring-2 ring-emerald-500 ring-offset-2' : $route.path === nav.path}">
          {{ nav.name }}
      </NuxtLink>
      </nav>
      <div class="grow-1 p-2">
        <slot />
      </div>
    </div>
    <Footer /> 
  </div>
</template>