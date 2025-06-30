<template>
  <div class="flex flex-col h-screen">
    <div class="flex-grow flex flex-col bg-gray-100">
      <div class="self-end mb-4 p-4">
        <ClientSignIn />
      </div>
      <NuxtLink to="/" class="self-center mb-4">
        <img src="/img/sg-text-logo.png" alt="Status Green Solutions" class="max-h-80" />
      </NuxtLink> 
      <Navigation nav-type="main" />
      <div class="p-8">
        <slot />
      </div>
    </div>
    <div class="grow-0 flex flex-col">
      <Footer /> 
    </div>
  </div>
</template>