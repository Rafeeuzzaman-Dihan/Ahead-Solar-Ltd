<script setup>
import { Head, Link } from '@inertiajs/vue3'
import {
    BoltIcon,
    MapPinIcon,
    ClockIcon,
    ArrowRightIcon,
    HomeIcon,
} from '@heroicons/vue/24/outline'

const vehicles = [
    {
        emoji: '🛻',
        name: 'Heavy Duty King',
        tagline: 'Maximum payload hauler',
        specs: [
            { label: 'Payload', value: '200 kg' },
            { label: 'Range', value: '120 km' },
            { label: 'Charge', value: '4 hrs' },
        ],
        accent: true,
    },
    {
        emoji: '🛵',
        name: 'Urban Rider Pro',
        tagline: 'Nimble city commuter',
        specs: [
            { label: 'Payload', value: '80 kg' },
            { label: 'Range', value: '80 km' },
            { label: 'Charge', value: '2.5 hrs' },
        ],
        accent: false,
    },
    {
        emoji: '🚚',
        name: 'Cargo Express',
        tagline: 'Last-mile delivery workhorse',
        specs: [
            { label: 'Payload', value: '150 kg' },
            { label: 'Range', value: '100 km' },
            { label: 'Charge', value: '3 hrs' },
        ],
        accent: false,
    },
]

const stations = [
    { name: 'Gulshan Hub', address: 'Gulshan Ave, Dhaka 1212', status: 'Active', hours: '24 / 7' },
    { name: 'Dhanmondi Point', address: 'Road 27, Dhanmondi, Dhaka', status: 'Active', hours: '6 AM – 11 PM' },
    { name: 'Uttara Sector 7', address: 'Sonargaon Janapath, Uttara', status: 'Coming Soon', hours: 'Q4 2026' },
]
</script>

<template>
    <Head title="Palash EV" />

    <!-- ================================ HERO ================================ -->
    <section class="relative overflow-hidden mesh-amber pt-32 pb-28">
        <div class="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-accent/25 blur-[130px] animate-pulse-glow"></div>
        <div class="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/25 blur-[120px]"></div>

        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <nav v-reveal class="flex items-center gap-2 text-sm text-slate-300">
                <Link href="/" class="inline-flex items-center gap-1 transition hover:text-white">
                    <HomeIcon class="h-4 w-4" /> Home
                </Link>
                <span>/</span>
                <span class="text-white">Palash EV</span>
            </nav>

            <div class="mt-8 max-w-3xl">
                <span v-reveal class="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                    <BoltIcon class="h-4 w-4" /> The Palash Sub-Brand
                </span>
                <h1 v-reveal="{ delay: 0.05 }" class="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Palash EV Mobility — <span class="text-gradient">built for Bangladesh's roads.</span>
                </h1>
                <p v-reveal="{ delay: 0.12 }" class="mt-6 max-w-2xl text-lg text-slate-300">
                    Rugged, locally-assembled electric vehicles paired with a fast-growing charging
                    network — engineered for real payloads, real distances and real monsoons.
                </p>
                <div v-reveal="{ delay: 0.18 }" class="mt-9">
                    <a
                        href="#lineup"
                        class="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:glow-accent"
                    >
                        Explore the lineup
                        <ArrowRightIcon class="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================ VEHICLE LINEUP ============================ -->
    <section id="lineup" class="bg-slate-950 py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div v-reveal class="max-w-2xl">
                <span class="text-sm font-semibold uppercase tracking-wider text-accent">The Fleet</span>
                <h2 class="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">Vehicle lineup</h2>
            </div>

            <div class="mt-14 grid gap-8 lg:grid-cols-3">
                <div
                    v-for="(v, i) in vehicles"
                    :key="v.name"
                    v-reveal="{ delay: i * 0.1 }"
                    class="group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2"
                    :class="
                        v.accent
                            ? 'border-accent/40 bg-gradient-to-br from-accent/10 to-slate-900'
                            : 'border-white/10 bg-slate-900/60 hover:border-accent/30'
                    "
                >
                    <span v-if="v.accent" class="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-slate-950">
                        Best Seller
                    </span>

                    <!-- vehicle image placeholder -->
                    <div class="flex h-36 items-center justify-center rounded-2xl bg-slate-950/50 text-7xl ring-1 ring-white/5 transition-transform duration-300 group-hover:scale-105">
                        {{ v.emoji }}
                    </div>

                    <h3 class="mt-6 text-2xl font-bold text-white">{{ v.name }}</h3>
                    <p class="mt-1 text-sm text-slate-400">{{ v.tagline }}</p>

                    <!-- spec chips -->
                    <div class="mt-5 flex flex-wrap gap-2">
                        <span
                            v-for="spec in v.specs"
                            :key="spec.label"
                            class="rounded-full bg-white/5 px-3 py-1.5 text-sm ring-1 ring-white/10"
                        >
                            <span class="text-slate-400">{{ spec.label }}:</span>
                            <span class="ml-1 font-semibold text-white">{{ spec.value }}</span>
                        </span>
                    </div>

                    <button
                        type="button"
                        class="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 py-3 text-sm font-semibold text-white transition group-hover:border-accent group-hover:text-accent"
                    >
                        Learn More
                        <ArrowRightIcon class="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================ CHARGING MAP ============================ -->
    <section class="relative overflow-hidden mesh-dark py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div v-reveal class="mx-auto max-w-2xl text-center">
                <span class="text-sm font-semibold uppercase tracking-wider text-accent">Network</span>
                <h2 class="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Charging map
                </h2>
            </div>

            <div v-reveal="{ delay: 0.1 }" class="relative mt-12 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <!-- overlay label -->
                <div class="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-slate-950/80 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                    <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                    Live Charging Network — Demo View
                </div>
                <iframe
                    title="Palash EV charging network — Dhaka"
                    class="h-[420px] w-full grayscale-[35%]"
                    style="border: 0"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Dhaka,Bangladesh&z=12&output=embed"
                ></iframe>
            </div>

            <!-- Station cards -->
            <div class="mt-10 grid gap-6 sm:grid-cols-3">
                <div
                    v-for="(st, i) in stations"
                    :key="st.name"
                    v-reveal="{ delay: i * 0.08 }"
                    class="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25"
                >
                    <div class="flex items-start justify-between">
                        <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/25">
                            <MapPinIcon class="h-6 w-6" />
                        </div>
                        <span
                            class="rounded-full px-3 py-1 text-xs font-semibold"
                            :class="
                                st.status === 'Active'
                                    ? 'bg-emerald-400/15 text-emerald-400 ring-1 ring-emerald-400/30'
                                    : 'bg-amber-400/15 text-amber-400 ring-1 ring-amber-400/30'
                            "
                        >
                            {{ st.status }}
                        </span>
                    </div>
                    <h3 class="mt-4 text-lg font-bold text-white">{{ st.name }}</h3>
                    <p class="mt-1 text-sm text-slate-400">{{ st.address }}</p>
                    <p class="mt-4 inline-flex items-center gap-2 text-sm text-slate-300">
                        <ClockIcon class="h-4 w-4 text-slate-500" /> {{ st.hours }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
