<template>
  <div class="flex flex-col gap-2 rounded-md border border-emerald-800 p-2 min-h-100">
    <div class="text-2xl font-semibold text-emerald-800">
      <slot name="title" />
    </div>
    <div class="h-[0.15rem] w-100 rounded-full bg-emerald-800"></div>
    <div class="flex flex-col lg:flex-row">
      <slot name="col-1" class="grow-0 lg:max-w-80"></slot>
      <slot name="col-2" class="grow-1"></slot>
    </div>
  </div>
</template>
