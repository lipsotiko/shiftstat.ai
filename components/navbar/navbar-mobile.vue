<script setup lang="ts">
import { NavigationMenuList, NavigationMenuRoot } from "reka-ui";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-vue-next";
import { ref } from "vue";
import { useNuxtApp } from "#app";
import { inject } from "vue";

const { $viewport } = useNuxtApp();
const isOpen = inject("isMobileMenuOpen");

watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  if ($viewport.isGreaterThan("mobile")) {
    isOpen.value = false;
  }
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="col-span-2 md:hidden">
    <Button
      class="float-right cursor-pointer"
      variant="outline"
      size="icon"
      @click="isOpen = !isOpen"
    >
      <Menu />
    </Button>
  </div>
  <div
    v-if="isOpen"
    class="fixed w-full h-full overflow-y-auto z-2 bg-white top-0 bottom-0 left-0 right-0"
  >
    <div class="p-4 h-[68px]">
      <Button
        class="float-right cursor-pointer"
        variant="outline"
        size="icon"
        @click="toggleMenu"
      >
        <X />
      </Button>
    </div>
    <div>
      <NavigationMenuRoot orientation="vertical">
        <NavigationMenuList>
          <NavbarServices />
          <NavbarPricing />
          <NavbarAbout />
        </NavigationMenuList>
      </NavigationMenuRoot>
      <slot />
    </div>
  </div>
</template>
