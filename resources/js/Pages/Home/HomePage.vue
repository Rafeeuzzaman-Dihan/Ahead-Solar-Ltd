<script setup>
import { Head, Link } from '@inertiajs/vue3'
import StatCounter from '@/Components/StatCounter.vue'
import {
    BuildingOffice2Icon,
    TruckIcon,
    ArrowRightIcon,
    BoltIcon,
    SunIcon,
} from '@heroicons/vue/24/outline'

const stats = [
    { value: 12400, suffix: '+', label: 'Tonnes CO₂ Saved', sub: 'Across deployed projects' },
    { value: 8.2, suffix: 'M+', decimals: 1, label: 'kWh Generated', sub: 'Clean energy delivered' },
    { value: 47, suffix: '', label: 'Charging Stations', sub: 'Live across Bangladesh' },
]
</script>

<template>
    <Head title="Home" />

    <!-- ================================ HERO ================================ -->
    <section class="relative flex min-h-screen items-center overflow-hidden mesh-dark pt-18">
        <!-- Floating glow orbs -->
        <div class="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/30 blur-[120px] animate-pulse-glow"></div>
        <div class="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-accent/20 blur-[130px] animate-pulse-glow"></div>

        <div class="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
            <!-- Left: copy -->
            <div>
                <span
                    v-reveal
                    class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200 backdrop-blur"
                >
                    <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"></span>
                    Clean energy · EV mobility · Made in Bangladesh
                </span>

                <h1
                    v-reveal="{ delay: 0.05 }"
                    class="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
                >
                    Powering <br />
                    <span class="text-gradient">Bangladesh's</span><br />
                    Clean Future
                </h1>

                <p v-reveal="{ delay: 0.12 }" class="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
                    From utility-scale battery storage and rooftop solar to the Palash electric
                    mobility network — Ahead Solar builds the infrastructure behind a cleaner,
                    self-reliant grid.
                </p>

                <div v-reveal="{ delay: 0.18 }" class="mt-9 flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/bess-solar"
                        class="group relative inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:glow-accent"
                    >
                        Explore BESS &amp; Solar
                        <ArrowRightIcon class="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/palash-ev"
                        class="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
                    >
                        Palash EV Mobility
                    </Link>
                </div>

                <div v-reveal="{ delay: 0.24 }" class="mt-12 flex items-center gap-8">
                    <div>
                        <p class="text-2xl font-bold text-white">2019</p>
                        <p class="text-xs uppercase tracking-wider text-slate-400">Founded</p>
                    </div>
                    <div class="h-10 w-px bg-white/15"></div>
                    <div>
                        <p class="text-2xl font-bold text-white">200+</p>
                        <p class="text-xs uppercase tracking-wider text-slate-400">Clients</p>
                    </div>
                    <div class="h-10 w-px bg-white/15"></div>
                    <div>
                        <p class="text-2xl font-bold text-white">3</p>
                        <p class="text-xs uppercase tracking-wider text-slate-400">Product Lines</p>
                    </div>
                </div>
            </div>

            <!-- Right: animated solar + lightning illustration -->
            <div v-reveal="{ delay: 0.1, y: 0 }" class="relative mx-auto hidden h-[460px] w-full max-w-md lg:block">
                <!-- rotating glow ring -->
                <div class="absolute inset-0 m-auto h-80 w-80 rounded-full border border-dashed border-white/10 animate-spin-slow"></div>

                <!-- glass panel card -->
                <div class="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 animate-float">
                    <div class="glass rounded-3xl p-6 shadow-2xl glow-primary">
                        <!-- Solar panel SVG -->
                        <svg viewBox="0 0 200 140" class="w-full" fill="none">
                            <defs>
                                <linearGradient id="cell" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stop-color="#1b6ca8" />
                                    <stop offset="100%" stop-color="#16527a" />
                                </linearGradient>
                            </defs>
                            <g stroke="#5eb3e8" stroke-width="1.2" opacity="0.9">
                                <rect x="20" y="20" width="160" height="90" rx="6" fill="url(#cell)" />
                                <line x1="73" y1="20" x2="73" y2="110" />
                                <line x1="126" y1="20" x2="126" y2="110" />
                                <line x1="20" y1="50" x2="180" y2="50" />
                                <line x1="20" y1="80" x2="180" y2="80" />
                            </g>
                            <rect x="96" y="110" width="8" height="22" fill="#475569" />
                            <rect x="78" y="130" width="44" height="6" rx="3" fill="#334155" />
                        </svg>
                        <div class="mt-4 flex items-center justify-between">
                            <div>
                                <p class="text-xs text-slate-400">Live output</p>
                                <p class="text-xl font-bold text-white">4.8 <span class="text-sm font-medium text-accent">kW</span></p>
                            </div>
                            <SunIcon class="h-9 w-9 text-accent animate-spin-slow" />
                        </div>
                    </div>
                </div>

                <!-- floating lightning badge -->
                <div class="absolute right-2 top-6 animate-float-slow">
                    <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent shadow-xl glow-accent">
                        <BoltIcon class="h-8 w-8 text-slate-950" />
                    </div>
                </div>

                <!-- floating mini stat -->
                <div class="absolute bottom-4 left-0 animate-float">
                    <div class="glass rounded-2xl px-4 py-3">
                        <p class="text-xs text-slate-400">CO₂ offset today</p>
                        <p class="text-lg font-bold text-emerald-400">+318 kg</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================ DUAL-PATH CARDS ============================ -->
    <section class="relative bg-slate-950 py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div v-reveal class="mx-auto max-w-2xl text-center">
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Two paths. One clean grid.
                </h2>
                <p class="mt-4 text-lg text-slate-400">
                    Whether you run an enterprise or ride the city, we have an electrified path for you.
                </p>
            </div>

            <div class="mt-16 grid gap-8 lg:grid-cols-2">
                <!-- Corporate -->
                <Link
                    href="/bess-solar"
                    v-reveal
                    class="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
                >
                    <div class="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"></div>
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
                        <BuildingOffice2Icon class="h-7 w-7" />
                    </div>
                    <p class="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">For Corporates</p>
                    <h3 class="mt-2 text-2xl font-bold text-white">BESS &amp; Solar Energy</h3>
                    <p class="mt-3 max-w-md text-slate-400">
                        Battery energy storage, grid integration and rooftop solar engineered to cut
                        bills, stabilise supply and meet compliance.
                    </p>
                    <span class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                        Discover solutions
                        <ArrowRightIcon class="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </span>
                </Link>

                <!-- Consumer -->
                <Link
                    href="/palash-ev"
                    v-reveal="{ delay: 0.1 }"
                    class="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20"
                >
                    <div class="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"></div>
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent ring-1 ring-accent/30">
                        <TruckIcon class="h-7 w-7" />
                    </div>
                    <p class="mt-6 text-sm font-semibold uppercase tracking-wider text-accent">For Everyone</p>
                    <h3 class="mt-2 text-2xl font-bold text-white">Palash EV Mobility</h3>
                    <p class="mt-3 max-w-md text-slate-400">
                        Locally-built electric vehicles and a growing charging network designed for
                        Bangladesh's roads, payloads and climate.
                    </p>
                    <span class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                        Meet the fleet
                        <ArrowRightIcon class="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </span>
                </Link>
            </div>
        </div>
    </section>

    <!-- ============================ LIVE IMPACT ============================ -->
    <section class="relative overflow-hidden mesh-dark py-24">
        <div class="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"></div>
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div v-reveal class="mx-auto max-w-2xl text-center">
                <span class="text-sm font-semibold uppercase tracking-wider text-accent">Live Impact</span>
                <h2 class="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Measurable change, in real numbers
                </h2>
            </div>

            <div class="mt-16 grid gap-6 sm:grid-cols-3">
                <div
                    v-for="(s, i) in stats"
                    :key="s.label"
                    v-reveal="{ delay: i * 0.1 }"
                    class="glass rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25"
                >
                    <p class="text-5xl font-extrabold tracking-tight text-white">
                        <StatCounter :value="s.value" :suffix="s.suffix" :decimals="s.decimals || 0" />
                    </p>
                    <p class="mt-3 text-lg font-semibold text-accent">{{ s.label }}</p>
                    <p class="mt-1 text-sm text-slate-400">{{ s.sub }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================ ABOUT STRIP ============================ -->
    <section class="bg-slate-50 py-20">
        <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left lg:px-8">
            <div v-reveal class="max-w-2xl">
                <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Bangladesh's energy independence, engineered locally.
                </h2>
                <p class="mt-4 text-lg text-slate-600">
                    Since 2019 we've assembled storage, solar and electric mobility under one roof —
                    with local manufacturing at the core of everything we ship.
                </p>
            </div>
            <Link
                href="/about"
                v-reveal="{ delay: 0.1 }"
                class="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary-dark"
            >
                Learn More
                <ArrowRightIcon class="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    </section>
</template>
