<script setup>
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ref } from "vue";

const email = ref("");
const handleCreateAccount = () => {
  navigateTo(`https://app.poneres.com/sign-up?roles=PROVIDER&email=${encodeURI(email.value)}`, {
    external: true,
    open: {
      target: '_blank',
    }
  });
};
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
        class="max-w-(--breakpoint-md) px-2 text-lg/7 font-light text-gray-500 max-sm:px-4 text-center"
      >
        Smarter staffing with AI - skip the recruiters and get matched instantly.
      </p>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-xl md:flex">
        <Input
          id="email"
          type="email"
          placeholder="Email"
          class="m-1"
          v-model="email"
        />
        <Button
          class="w-full md:w-[128px] m-1"
          @click="handleCreateAccount()"
          >Create Account</Button
        >
      </div>
    </div>
  </div>
</template>
