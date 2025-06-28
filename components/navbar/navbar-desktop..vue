<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavbarProviders />
      <NavbarEmployers />
      <NavbarAbout />
    </NavigationMenuList>
  </NavigationMenu>
</template>
