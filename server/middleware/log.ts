export default defineEventHandler((event) => {
  // Log the request method and URL
  console.log(`Request Method: ${event.node.req.method}`);
  console.log(`Request URL: ${event.node.req.url}`);

  // Log the request headers
  console.log('Request Headers:', event.node.req.headers);

})