<script setup>
import { Head } from '@inertiajs/vue3'
import StatCounter from '@/Components/StatCounter.vue'
import {
    RocketLaunchIcon,
    EyeIcon,
    CpuChipIcon,
    CheckCircleIcon,
} from '@heroicons/vue/24/outline'

const stats = [
    { value: 2019, label: 'Founded', plain: true },
    { value: 200, suffix: '+', label: 'Clients' },
    { value: 3, label: 'Product Lines' },
    { value: 47, label: 'Stations' },
]

const team = [
    { initials: 'AR', name: 'Arif Rahman', title: 'Founder & CEO', bio: 'Two decades in power systems and renewable infrastructure.', color: 'from-primary to-primary-dark' },
    { initials: 'NS', name: 'Nusrat Sultana', title: 'Head of Engineering', bio: 'Leads BESS design and grid-integration across deployments.', color: 'from-accent to-amber-600' },
    { initials: 'TK', name: 'Tanvir Karim', title: 'Director, Palash EV', bio: 'Drives local EV assembly and the charging network rollout.', color: 'from-emerald-500 to-teal-600' },
]

const capabilities = [
    'Local battery pack assembly & BMS calibration',
    'In-house EV chassis fitting and QA testing',
    'Solar mounting fabrication for local roof types',
    'Inverter & switchgear configuration lab',
]
</script>

<template>
    <Head title="About" />

    <!-- ================================ HERO ================================ -->
    <section class="relative overflow-hidden mesh-dark pt-32 pb-20">
        <div class="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"></div>
        <div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <span v-reveal class="text-sm font-semibold uppercase tracking-wider text-accent">Ahead Solar Ltd. · Est. 2019</span>
            <h1 v-reveal="{ delay: 0.05 }" class="mx-auto mt-4 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
                Building the backbone of <span class="text-gradient">clean Bangladesh.</span>
            </h1>
            <p v-reveal="{ delay: 0.12 }" class="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
                We unite energy storage, solar and electric mobility under one local company —
                designing, assembling and maintaining the hardware that powers the transition.
            </p>
        </div>
    </section>

    <!-- ============================ MISSION & VISION ============================ -->
    <section class="bg-slate-950 py-24">
        <div class="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:px-8">
            <div v-reveal class="rounded-3xl border border-white/10 bg-slate-900/60 p-10 transition hover:border-primary/40">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25">
                    <RocketLaunchIcon class="h-7 w-7" />
                </div>
                <h2 class="mt-6 text-2xl font-bold text-white">Our Mission</h2>
                <p class="mt-3 text-slate-400">
                    To make reliable clean energy and electric mobility affordable and accessible
                    across Bangladesh — manufactured locally, supported nationally.
                </p>
            </div>
            <div v-reveal="{ delay: 0.1 }" class="rounded-3xl border border-white/10 bg-slate-900/60 p-10 transition hover:border-accent/40">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent ring-1 ring-accent/25">
                    <EyeIcon class="h-7 w-7" />
                </div>
                <h2 class="mt-6 text-2xl font-bold text-white">Our Vision</h2>
                <p class="mt-3 text-slate-400">
                    A self-reliant grid where every rooftop generates, every business stores and
                    every road carries clean, electric transport.
                </p>
            </div>
        </div>
    </section>

    <!-- ============================ STATS BAR ============================ -->
    <section class="relative overflow-hidden mesh-dark py-16">
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/50 p-10 backdrop-blur sm:grid-cols-4">
                <div v-for="(s, i) in stats" :key="s.label" v-reveal="{ delay: i * 0.08 }" class="text-center">
                    <p class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        <StatCounter v-if="!s.plain" :value="s.value" :suffix="s.suffix || ''" :duration="1.8" />
                        <span v-else>{{ s.value }}</span>
                    </p>
                    <p class="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">{{ s.label }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================ LEADERSHIP ============================ -->
    <section class="bg-slate-950 py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div v-reveal class="mx-auto max-w-2xl text-center">
                <span class="text-sm font-semibold uppercase tracking-wider text-accent">People</span>
                <h2 class="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">Leadership team</h2>
            </div>

            <div class="mt-14 grid gap-8 sm:grid-cols-3">
                <div
                    v-for="(m, i) in team"
                    :key="m.name"
                    v-reveal="{ delay: i * 0.1 }"
                    class="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-white/25"
                >
                    <div
                        class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br text-xl font-extrabold text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                        :class="m.color"
                    >
                        {{ m.initials }}
                    </div>
                    <h3 class="mt-5 text-xl font-bold text-white">{{ m.name }}</h3>
                    <p class="mt-1 text-sm font-semibold text-accent">{{ m.title }}</p>
                    <p class="mt-3 text-sm text-slate-400">{{ m.bio }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================ MANUFACTURING ============================ -->
    <section class="bg-slate-900 py-24">
        <div class="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
            <div v-reveal>
                <span class="text-sm font-semibold uppercase tracking-wider text-accent">Made in Bangladesh</span>
                <h2 class="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Local assembly at the core
                </h2>
                <p class="mt-4 text-lg text-slate-400">
                    Rather than import finished units, we assemble and calibrate locally — creating
                    jobs, cutting lead times and tailoring every product to local conditions.
                </p>
            </div>

            <ul v-reveal="{ delay: 0.1 }" class="space-y-4">
                <li
                    v-for="cap in capabilities"
                    :key="cap"
                    class="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-5"
                >
                    <CpuChipIcon class="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <span class="text-slate-200">{{ cap }}</span>
                    <CheckCircleIcon class="ml-auto h-6 w-6 shrink-0 text-emerald-400" />
                </li>
            </ul>
        </div>
    </section>
</template>
