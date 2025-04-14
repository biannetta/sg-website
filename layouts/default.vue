<template>
  <div class="flex flex-col h-screen w-screen">
    <div class="flex-grow">
      <Navigation />
      <slot />
    </div>
    <div class="grow-0 flex flex-col">
      <img class="self-end max-h-10" src="/img/sg-text-logo.png" alt="Status Green Solutions" />
    </div>
  </div>
</template>