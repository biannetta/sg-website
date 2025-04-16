<script setup lang="ts">
const router = useRouter()

const routes = router.getRoutes().map(({ name, path, meta }) => {
  const { title } = meta

  return { name, path, title }
}).filter(route => route.name !== 'index')
</script>

<template>
  <div>
    <ul class="flex gap-8 item-center justify-center text-lg font-semibold">
      <li v-for="route in routes" :key="route.name" class="text-emerald-800 hover:text-emerald-400 text-3xl">
        <NuxtLink :to="route.path">{{ route.title }}</NuxtLink>
        <div class="h-1 w-100 rounded-full bg-emerald-800" :hidden="$route.path != route.path"></div>
      </li>
    </ul>
  </div>
</template>