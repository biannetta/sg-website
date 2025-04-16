export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name')

  return {
    hello: name
  }
});