<script setup lang="ts">
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { inject } from "vue";
const isOpen = inject("isMobileMenuOpen");

const navigateAndCloseMenu = async () => {
  await navigateTo('/');
  isOpen.value = false;
}

</script>
<template>
  <NavigationMenuItem>
    <NavigationMenuLink :class="navigationMenuTriggerStyle()" as-child>
      <NuxtLink @click="navigateAndCloseMenu">Home</NuxtLink>
    </NavigationMenuLink>
  </NavigationMenuItem>
</template>
