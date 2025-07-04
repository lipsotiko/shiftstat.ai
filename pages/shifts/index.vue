<script setup>
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from "@/components/ui/input";
import { X } from 'lucide-vue-next'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
</script>
<template>
    <div class="flex items-center justify-center">
        <div class="w-full md:flex px-4 py-1 mt-8">
            <Select>
                <SelectTrigger class="w-full md:w-[188px] m-1 bg-gray-50">
                    <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="anesthesiology">
                            Baltimore, MD
                        </SelectItem>
                        <SelectItem value="em">
                            Miami, FL
                        </SelectItem>
                        <SelectItem value="blueberry">
                            Chicago, IL
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Input id="email" type="email" placeholder="Shift description, keywords, or facility" class="m-1 bg-gray-50"
                v-model="email" />
            <Button class="w-full md:w-[128px] m-1" @click="() => { navigateTo('/shifts') }">
                <Search />
                Search
            </Button>
            <Button variant="link" class="m-1" @click="() => { navigateTo('/shifts') }">
                Clear
            </Button>
        </div>
    </div>
    <div class="flex px-4 py-1">
        <Select>
            <SelectTrigger class="w-full md:w-[188px] m-1 bg-gray-50">
                <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="anesthesiology">
                        Anesthesiology
                    </SelectItem>
                    <SelectItem value="em">
                        Emergency Medicine
                    </SelectItem>
                    <SelectItem value="blueberry">
                        Hospitalist
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Select>
            <SelectTrigger class="w-full md:w-[168px] m-1 bg-gray-50">
                <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="short">
                        Short Term
                    </SelectItem>
                    <SelectItem value="long">
                        Long Term
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
    <div class="p-4">
        <div v-for="i in 10" :key="`row_${i}`" class="flex ">
            <Card v-for="i in 4" :key="`card_${i}`" class="m-2 w-[288px]">
                <CardHeader>
                    <CardTitle>Anesthesiologist</CardTitle>
                    <CardDescription>Jackson Memorial Hospital</CardDescription>     
                </CardHeader>
                <CardContent>
                    <ul>
                        <li>📍Miami, FL</li>
                        <li>📅 Jul 18-22</li>
                        <li>🕒 7am-7pm</li>
                        <li>💰 $1,800/day</li>
                    </ul>
                </CardContent>
                <CardFooter class="flex justify-between">
                    <Button variant="outline">
                        Save
                    </Button>
                    <Button>Apply</Button>
                </CardFooter>
            </Card>
        </div>
    </div>
</template>
