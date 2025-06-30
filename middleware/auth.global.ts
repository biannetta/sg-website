const isProtectedRoute = createRouteMatcher(['/clients(.*)'])

export default defineNuxtRouteMiddleware((to) => {
  const { userId } = useAuth()

  if(!userId.value && isProtectedRoute(to)) {
    return navigateTo('/')
  }
})