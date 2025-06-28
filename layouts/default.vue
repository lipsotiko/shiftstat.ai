<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { provide } from "vue";
const isMobileMenuOpen = ref();

provide("isMobileMenuOpen", isMobileMenuOpen);

const goToLogin = () => {
  navigateTo(`https://app.poneres.com/oauth2/authorization/okta`, {
    external: true,
    open: {
      target: '_blank',
    }
  });
}

const handleCreateAccount = () => {
  navigateTo('https://app.poneres.com/sign-up?roles=PROVIDER', {
    external: true,
    open: {
      target: '_blank',
    }
  });
};
</script>

<template>
  <div class="m-4">
    <div class="grid grid-cols-3 gap-4">
      <NuxtLink to="/" class="font-semibold">ShiftStat</NuxtLink>
      <NavbarMobile>
        <div class="flex m-2">
          <Button class="flex-1 m-2">Create account</Button>
          <Button variant="outline" class="flex-1 m-2" @click="goToLogin"
            >Log in</Button
          >
        </div>
      </NavbarMobile>
      <div class="justify-center hidden md:flex">
        <NavbarDesktop />
      </div>
      <div class="justify-end hidden md:flex">
        <Button variant="link" class="mr-2" @click="goToLogin">Log in</Button>
        <Button @click="handleCreateAccount">Create account</Button>
      </div>
    </div>
    <div class="w-full">
      <div class="mx-auto max-w-[1440px]">
        <slot />
      </div>
    </div>
  </div>
</template>
