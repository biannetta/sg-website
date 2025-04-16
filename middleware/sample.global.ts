export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Global middleware triggered')
  console.log('Navigating from:', from.fullPath)
  console.log('Navigating to:', to.fullPath)
})