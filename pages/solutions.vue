<script setup lang="ts">
definePageMeta({
  title: 'Solutions',
  navigation: 'main'
})
</script>

<template>
  <div class="flex md:flex-col gap-4">
    <SolutionCard>
      <template #title>Regimen Management mPage</template>
      <template #col-1>
        <img src="/img/P1934_DiscernRules_AP.png" alt="regimen-management-mpage">
      </template>
      <template #col-2>
        <p class="grow-1">An mPage designed for Oncologist allowing them to update regimen attributes associated to an encounter</p>
      </template>
    </SolutionCard>
    <SolutionCard>
      <template #title>Preferred Pharmacy mPage</template>
      <template #col-1>
        <img src="/img/P1934_DiscernRules_AP.png" alt="regimen-management-mpage">
      </template>
      <template #col-2>
        <p class="grow-1">Search with ease through a self managed list of pharmacies in your Oracle database and assosciate them to a patient for future reference. Include additional notes of infomration about each pharamcy</p>
      </template>
    </SolutionCard>
    <SolutionCard>
      <template #title>PowerForm Search Component</template>
      <template #col-1>
        <img src="/img/P1934_DiscernRules_AP.png" alt="regimen-management-mpage">
      </template>
      <template #col-2>
        <p class="grow-1">Eliminate the clutter of ad hoc form selection and utilize our  PowerForm search component to find any form with the use of an autocomplete/suggestive search tool. Allow users to faviourite forms for quick return to on encounters</p>
      </template>
    </SolutionCard>
  </div>
</template>