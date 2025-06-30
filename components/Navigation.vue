<script setup lang="ts">
const { navType } = defineProps({
  navType: String
})

const router = useRouter()

const routes = router.getRoutes().map(({ name, path, meta }) => {
  const { title, navigation } = meta
  return { name, path, title, navigation }
}).filter(route => route.navigation === navType)
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