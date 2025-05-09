<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { provide } from "vue";
const isMobileMenuOpen = ref();

provide("isMobileMenuOpen", isMobileMenuOpen);

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/components/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/components/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/components/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
</script>

<template>
  <div class="m-4">
    <div class="grid grid-cols-3 gap-4">
      <NuxtLink to="/">Poneres Connect</NuxtLink>
      <NavbarMobile>
        <div class="flex m-2">
          <Button class="cursor-pointer flex-1 m-2">Create Account</Button>
          <Button variant="outline" class="cursor-pointer flex-1 m-2"
            >Log in</Button
          >
        </div>
      </NavbarMobile>
      <div class="justify-center hidden md:flex">
        <NavbarDesktop />
      </div>
      <div class="justify-end hidden md:flex">
        <Button variant="outline" class="mr-2 cursor-pointer">Log in</Button>
        <Button class="cursor-pointer">Create Account</Button>
      </div>
    </div>
    <div class="w-full">
      <div class="mx-auto max-w-[1440px]">
        <slot />
      </div>
    </div>
  </div>
</template>
