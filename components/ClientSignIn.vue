<template>
  <SignedOut>
    <SignInButton
      class="border border-emerald-800 rounded-md 
             bg-emerald-800 text-white
             hover:ring-2 hover:ring-emerald-500 hover:ring-offset-2 
             flex items-center px-4 py-2">
      Client Login
    </SignInButton>
  </SignedOut>
  <SignedIn>
    <UserButton showName="true" />
  </SignedIn> 
</template>