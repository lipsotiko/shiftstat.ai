<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
    <div class="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
      <h1 class="text-3xl font-semibold text-gray-800 mb-6 text-center">Find Your Next Shift</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Date -->
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600 mb-1">Date</label>
          <Datepicker v-model="selectedDate" class="rounded-lg border-gray-300 shadow-sm" />
        </div>

        <!-- Work Type -->
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600 mb-1">Work Type</label>
          <select
            v-model="workType"
            class="rounded-lg border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option disabled value="">Select</option>
            <option>Short-term</option>
            <option>Long-term</option>
          </select>
        </div>

        <!-- Location -->
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600 mb-1">Location</label>
          <input
            v-model="location"
            type="text"
            placeholder="City, State"
            class="rounded-lg border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <!-- Button -->
      <div class="mt-6 text-center">
        <button
          @click="handleSearch"
          class="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-xl shadow-md transition"
        >
          Search Shifts
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Datepicker from 'vue3-datepicker'

const selectedDate = ref(null)
const workType = ref('')
const location = ref('')

const handleSearch = () => {
  const url = `https://app.poneres.com/search?date=${selectedDate.value}&type=${workType.value}&location=${location.value}`
  window.open(url, '_blank')
}
</script>


