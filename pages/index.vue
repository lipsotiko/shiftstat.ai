<script setup>
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
</script>
<template>
  <div>
    <div class="mt-20 text-center">
      <h1
        class="px-2 text-3xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-4xl lg:text-5xl xl:text-6xl"
      >
        Where Top Healthcare Professionals Find Their Next Opportunity.
      </h1>
    </div>
    <div class="flex justify-center p-10">
      <p
        class="max-w-(--breakpoint-md) px-2 text-lg/7 font-light text-gray-500 max-sm:px-4"
      >
        Apply in 10 minutes for online business banking that transforms how you
        operate.
      </p>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-xl md:flex">
        <Input id="email" type="email" placeholder="Email" class="m-1" />
        <Button class="cursor-pointer w-full md:w-[128px] m-1"
          >Create Account</Button
        >
        <Button variant="outline" class="cursor-pointer w-full md:w-[128px] m-1"
          >Contact Sales</Button
        >
      </div>
    </div>
  </div>
</template>
