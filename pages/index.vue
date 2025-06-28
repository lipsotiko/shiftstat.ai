<script setup>
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
    <Card class="m-4 bg-sky-100">
      <div class="mt-16 text-center">
        <h1
          class="px-2 text-3xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-4xl lg:text-5xl xl:text-6xl">
          The Marketplace for Healthcare Shifts
        </h1>
      </div>
      <div class="flex justify-center pb-8">
        <p class="max-w-(--breakpoint-md) px-2 text-lg/7 font-light text-gray-500 max-sm:px-4 text-center">
          Shifting healthcare staffing through AI-powered precision.
        </p>
      </div>
      <div class="flex items-center justify-center mb-4">
        <div class="w-xl md:flex p-4">
          <Input id="email" type="email" placeholder="Email" class="m-1 bg-gray-50" v-model="email" />
          <Button class="w-full md:w-[128px] m-1" @click="handleCreateAccount()">Create Account</Button>
        </div>
      </div>
    </Card>
    <div class="bg-white text-gray-800">
      <section class=" sm:flex">
        <div class="p-2 m-4 sm:w-[50%]">
          <h2 class="text-xl tracking-tighter text-balance max-lg:font-medium sm:text-2xl lg:text-3xl xl:text-4xl mb-2">
            Tired of Recruiters?
          </h2>
          <p class="font-light">
            Most providers are frustrated by the lack of control and transparency in healthcare staffing. ShiftStat puts
            the power back in your hands by establishing direct communication between providers and facilities, without
            the layers of traditional staffing models.
          </p>
        </div>
        <div class="p-2 m-4 sm:w-[50%]">
          <h2 class="text-xl tracking-tighter text-balance max-lg:font-medium sm:text-2xl lg:text-3xl xl:text-4xl mb-2">
            Built for Providers
          </h2>
          <p class="font-light">
            We connect licensed healthcare providers directly to hospitals and clinics — no recruiters, no staffing
            agencies, no hidden markups. See real pay, filter by shift type, and work on your terms.
          </p>
        </div>
      </section>

      <!-- How it Works -->
      <Card class="m-4 bg-gray-50">
        <section class="p-4 text-center">
          <h2
            class="text-xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-2xl lg:text-3xl xl:text-4xl mb-18">
            Browse, Compare, & Apply to Shifts Here!
          </h2>
          <div class="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <div>
              <div class="text-6xl mb-4">📅</div>
              <h3 class="text-xl font-semibold">Set your availability</h3>
            </div>
            <div>
              <div class="text-6xl mb-4">📍</div>
              <h3 class="text-xl font-semibold">Pick your location</h3>
            </div>
            <div>
              <div class="text-6xl mb-4">💼</div>
              <h3 class="text-xl font-semibold">Apply instantly</h3>
            </div>
          </div>
        </section>
      </Card>
      <!-- Features -->
      <section class="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 class="text-2xl tracking-tighter text-balance max-lg:font-medium sm:text-3xl lg:text-4xl xl:text-5xl mb-10">
          Why ShiftStat?
        </h2>
        <div class="grid md:grid-cols-3 gap-8 text-left">
          <Card class="p-4 bg-white shadow rounded-xl">
            <h3 class="text-xl font-semibold">Transparent Pay</h3>
            <p class="text-gray-600">See what hospitals pay and what you take home — no guessing.</p>
          </Card>
          <Card class="p-4 bg-white shadow rounded-xl">
            <h3 class="text-xl font-semibold">Direct Booking</h3>
            <p class="text-gray-600">No recruiters. Book shifts like you're reserving a flight.</p>
          </Card>
          <Card class="p-4 bg-white shadow rounded-xl">
            <h3 class="text-xl font-semibold">Provider-Owned</h3>
            <p class="text-gray-600">Built by clinicians who know what matters — YOU.</p>
          </Card>
        </div>
      </section>

      <!-- CTA -->
      <Card class="py-10 px-6 bg-sky-500 text-white">
        <div class="text-center">
          <h2 class="text-3xl mb-4">Start Searching Shifts Today</h2>
          <p class="mb-6 text-lg">No account needed to browse. See available shifts now.</p>
          <Button variant="secondary" class="text-sky-700 hover:bg-gray-100">
            Browse Shifts</Button>
        </div>
      </Card>
      <footer class="text-center text-sm text-gray-500 py-8 border-t mt-8">
        © 2025 ShiftStat, Inc. · <a href="#" class="underline">Privacy</a>
      </footer>
    </div>
  </div>
</template>
