<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
</script>
<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Providers</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul
        class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
      >
        <li class="row-span-3">
          <NavigationMenuLink as-child>
            <a
              class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              href="/"
            >
              <img src="https://www.reka-ui.com/logo.svg" class="h-6 w-6" />
              <div class="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
              <p class="text-sm leading-tight text-muted-foreground">
                Beautifully designed components built with Radix UI and Tailwind
                CSS.
              </p>
            </a>
          </NavigationMenuLink>
        </li>

        <li>
          <NavigationMenuLink as-child>
            <a
              href="#"
              class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div class="text-sm font-medium leading-none">Introduction</div>
              <p
                class="line-clamp-2 text-sm leading-snug text-muted-foreground"
              >
                Re-usable components built using Radix UI and Tailwind CSS.
              </p>
            </a>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink as-child>
            <a
              href="#"
              class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div class="text-sm font-medium leading-none">Installation</div>
              <p
                class="line-clamp-2 text-sm leading-snug text-muted-foreground"
              >
                How to install dependencies and structure your app.
              </p>
            </a>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink as-child>
            <a
              href="/docs/typography"
              class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div class="text-sm font-medium leading-none">Typography</div>
              <p
                class="line-clamp-2 text-sm leading-snug text-muted-foreground"
              >
                Styles for headings, paragraphs, lists...etc
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>
