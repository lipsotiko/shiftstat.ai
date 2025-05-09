<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavbarServices />
      <NavbarPricing />
      <NavbarAbout />
    </NavigationMenuList>
  </NavigationMenu>
</template>
