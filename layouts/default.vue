<template>
  <div class="flex flex-col h-screen w-screen">
    <div class="flex-grow flex flex-col bg-gray-100 p-4">
      <NuxtLink to="/" class="self-center mb-4">
        <img src="/img/sg-text-logo.png" alt="Status Green Solutions" class="max-h-80" />
      </NuxtLink>
      <Navigation />
      <div class="p-8">
        <slot />
      </div>
    </div>
    <div class="grow-0 flex flex-col">
      <div class="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Status Green Solutions</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </div>
</template>