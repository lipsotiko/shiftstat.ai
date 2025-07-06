<script setup>
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-vue-next";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
  Pagination,
  PaginationFirst,
  PaginationLast,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useDayjs } from '#dayjs'

const dayjs = useDayjs()
const runtimeConfig = useRuntimeConfig()
const route = useRoute();
const location = ref(route.query.location);
const search = ref(route.query.search);
const specialty = ref();
const duration = ref();
const page = ref(1);

const { pending, data, refresh } = await useAsyncData(
  "shifts",
  () =>
    $fetch("/api/public/shifts", {
      baseURL: runtimeConfig.public.apiBase,
      query: {
        location: location.value,
        specialty: specialty.value,
        duration: duration.value,
        search: search.value,
        size: 16,
        page: page.value - 1,
      },
    }),
  {
    server: false,
    watch: [page],
  },
);

const fmtSpecialty = (specialty) => {
    switch (specialty) {
        case 'ANES':
            return 'Anesthesiology';
        case 'EM':
            return 'Emergency Medicine';
        case 'HOSP':
            return 'Hospitalist';
        default:
            return specialty;
    }
}

const fmtRateFreq = (rateFrequency) => {
    return rateFrequency === 'HOUR' ? 'Hr': 'Day';
}

const fmtDate = (s) => {
    return `${dayjs(s.startDate).format('MMM D, YYYY')} - ${dayjs(s.endDate).format('MMM D, YYYY')}`
}

const fmtTime = (s) => {
    return `${dayjs('1999-01-01'+s.startTime).format('Ha')} - ${dayjs('1999-01-01'+s.endTime).format('Ha')}`
}

const clear = () => {
    page.value = 1;
    location.value = undefined;
    specialty.value = undefined;
    duration.value = undefined;
    search.value = undefined;
    refresh();
}

</script>
<template>
    <div class="flex items-center justify-center">
        <div class="w-full md:flex px-4 py-1 mt-8">
            <Select v-model="location">
                <SelectTrigger class="w-full md:w-[188px] m-1 bg-gray-50">
                    <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem v-for="city in cities" :value="city">
                            {{ city }}
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Input id="search" placeholder="Shift description, keywords, or facility" class="m-1 bg-gray-50"
                v-model="search" />
            <Button class="w-full md:w-[128px] m-1" :disabled="pending" @click="() => {
                refresh();
                page = 1;
            }">
                <div v-if="pending">
                    <Loader />
                </div>
                Search
            </Button>
            <Button variant="link" class="m-1" @click="() => { clear() }">
                Clear
            </Button>
        </div>
    </div>
    <div class="flex px-4 py-1">
        <Select v-model="specialty">
            <SelectTrigger class="w-full md:w-[188px] m-1 bg-gray-50">
                <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="ANES">
                        Anesthesiology
                    </SelectItem>
                    <SelectItem value="EM">
                        Emergency Medicine
                    </SelectItem>
                    <SelectItem value="HOSP">
                        Hospitalist
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Select v-model="duration">
            <SelectTrigger class="w-full md:w-[168px] m-1 bg-gray-50">
                <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="SHORT_TERM">
                        Short Term
                    </SelectItem>
                    <SelectItem value="LONG_TERM">
                        Long Term
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
    <div class="p-4">
        <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card v-for="s in data?.content" :key="`card_${s.id}`" class="min-w-[248px]">
                <CardHeader>
                    <CardTitle>{{ fmtSpecialty(s.specialty) }}</CardTitle>
                    <CardDescription class="truncate">{{ s.facility }}</CardDescription>     
                </CardHeader>
                <CardContent>
                    <ul>
                        <li>📍 {{ s.location }}</li>
                        <li>📅 {{ fmtDate(s) }}</li>
                        <li>🕒 {{ fmtTime(s) }}</li>
                        <li>💰 ${{s.rate }}/{{fmtRateFreq(s.rateFrequency) }}</li>
                    </ul>
                </CardContent>
                <CardFooter class="flex justify-between">
                    <Button variant="outline">
                        View
                    </Button>
                    <Button>Apply</Button>
                </CardFooter>
            </Card>
        </div>
    </div>
    <Pagination @update:page="(e) => page = e" v-slot="{ page }" :items-per-page="data?.size" :total="data?.totalElements" :default-page="1">
        <PaginationContent v-slot="{ items }">
            <PaginationFirst />
      <PaginationPrevious />
      <template v-for="(item, index) in items" :key="index">
        <PaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          :is-active="item.value === page"
        >
          {{ item.value }}
        </PaginationItem>
      </template>

      <PaginationEllipsis :index="4" />

      <PaginationNext />
      <PaginationLast />
    </PaginationContent>
  </Pagination>
</template>
