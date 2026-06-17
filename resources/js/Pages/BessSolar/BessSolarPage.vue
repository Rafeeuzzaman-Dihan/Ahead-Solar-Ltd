<script setup>
import { ref, computed } from 'vue'
import { Head, Link } from '@inertiajs/vue3'
import {
    Battery100Icon,
    Squares2X2Icon,
    SunIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
    LockClosedIcon,
    ArrowRightIcon,
    HomeIcon,
} from '@heroicons/vue/24/outline'

const services = [
    { icon: Battery100Icon, title: 'BESS Storage', desc: 'Lithium battery banks that store surplus energy and discharge during peak demand.' },
    { icon: Squares2X2Icon, title: 'Grid Integration', desc: 'Seamless hybrid inverters and switchgear that sync storage with the national grid.' },
    { icon: SunIcon, title: 'Solar Panels', desc: 'High-efficiency monocrystalline arrays sized for rooftops and ground mounts.' },
    { icon: ChartBarIcon, title: 'Monitoring', desc: 'Real-time dashboards tracking generation, consumption and battery health.' },
    { icon: ShieldCheckIcon, title: 'Compliance', desc: 'BSTI, IEC and utility paperwork handled end-to-end for a hassle-free rollout.' },
    { icon: WrenchScrewdriverIcon, title: 'Maintenance', desc: 'Scheduled servicing and rapid-response support keep uptime above 99%.' },
]

const steps = [
    { n: '01', title: 'Site Assessment', desc: 'We audit your load profile, roof and grid connection to size the system.' },
    { n: '02', title: 'Design & Install', desc: 'Engineered layout, certified hardware and a clean, code-compliant install.' },
    { n: '03', title: 'Monitor & Save', desc: 'Go live with real-time monitoring and watch the savings compound.' },
]

const certs = [
    { code: 'BSTI', name: 'Bangladesh Standards' },
    { code: 'BRTA', name: 'Road Transport Authority' },
    { code: 'ISO', name: 'ISO 9001:2015' },
    { code: 'IEC', name: 'IEC 61215 / 62619' },
]

// ---- Savings calculator (dummy formula) ----
const monthlyBill = ref(45000)
const unitRate = ref(11)
const showResults = ref(false)
const results = ref({ monthly: 0, yearly: 0, payback: 0 })

const calculate = () => {
    const bill = Number(monthlyBill.value) || 0
    const rate = Number(unitRate.value) || 1
    const monthlyUnits = bill / rate
    const offset = 0.62 // assume 62% of load offset
    const monthlySavings = Math.round(bill * offset)
    const yearlySavings = monthlySavings * 12
    // crude system cost estimate -> payback in years
    const estSystemCost = Math.round(monthlyUnits * rate * 0.62 * 12 * 4.3)
    const payback = +(estSystemCost / (yearlySavings || 1)).toFixed(1)

    results.value = { monthly: monthlySavings, yearly: yearlySavings, payback }
    showResults.value = true
}

const fmt = (n) => '৳' + Number(n).toLocaleString('en-IN')
const totalUnits = computed(() =>
    Math.round((Number(monthlyBill.value) || 0) / (Number(unitRate.value) || 1))
)
</script>

<template>
    <Head title="BESS & Solar" />

    <!-- ================================ HERO ================================ -->
    <section class="relative overflow-hidden mesh-dark pt-32 pb-24">
        <div class="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-primary/25 blur-[130px]"></div>
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <nav v-reveal class="flex items-center gap-2 text-sm text-slate-400">
                <Link href="/" class="inline-flex items-center gap-1 transition hover:text-white">
                    <HomeIcon class="h-4 w-4" /> Home
                </Link>
                <span>/</span>
                <span class="text-white">BESS &amp; Solar</span>
            </nav>

            <h1 v-reveal="{ delay: 0.05 }" class="mt-6 max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
                Energy storage &amp; solar, <span class="text-gradient">engineered to save.</span>
            </h1>
            <p v-reveal="{ delay: 0.12 }" class="mt-6 max-w-2xl text-lg text-slate-300">
                Industrial-grade battery storage and high-yield solar that slash electricity costs,
                harden you against outages and keep you fully compliant.
            </p>
        </div>
    </section>

    <!-- ============================ SERVICES GRID ============================ -->
    <section class="bg-slate-950 py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div v-reveal class="max-w-2xl">
                <span class="text-sm font-semibold uppercase tracking-wider text-accent">Capabilities</span>
                <h2 class="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Everything under one roof
                </h2>
            </div>

            <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(s, i) in services"
                    :key="s.title"
                    v-reveal="{ delay: (i % 3) * 0.08 }"
                    class="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-slate-900 hover:shadow-2xl hover:shadow-primary/10"
                >
                    <div class="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-110">
                        <component :is="s.icon" class="h-7 w-7" />
                    </div>
                    <h3 class="mt-6 text-xl font-bold text-white">{{ s.title }}</h3>
                    <p class="mt-2 text-slate-400">{{ s.desc }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================ HOW IT WORKS ============================ -->
    <section class="relative bg-slate-900 py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div v-reveal class="mx-auto max-w-2xl text-center">
                <span class="text-sm font-semibold uppercase tracking-wider text-accent">Process</span>
                <h2 class="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">How it works</h2>
            </div>

            <div class="relative mt-16">
                <!-- connecting line -->
                <div class="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"></div>
                <div class="grid gap-10 lg:grid-cols-3">
                    <div v-for="(step, i) in steps" :key="step.n" v-reveal="{ delay: i * 0.1 }" class="relative text-center">
                        <div class="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-lg font-extrabold text-slate-950 glow-accent">
                            {{ step.n }}
                        </div>
                        <h3 class="mt-6 text-xl font-bold text-white">{{ step.title }}</h3>
                        <p class="mt-2 mx-auto max-w-xs text-slate-400">{{ step.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================ CALCULATOR ============================ -->
    <section class="relative overflow-hidden mesh-dark py-24">
        <div class="pointer-events-none absolute left-10 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-[120px]"></div>
        <div class="relative mx-auto max-w-5xl px-6 lg:px-8">
            <div v-reveal class="mx-auto max-w-2xl text-center">
                <span class="text-sm font-semibold uppercase tracking-wider text-accent">Savings Calculator</span>
                <h2 class="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    See what you could save
                </h2>
                <p class="mt-4 text-slate-400">Indicative estimate — final figures follow a site assessment.</p>
            </div>

            <div v-reveal="{ delay: 0.1 }" class="mt-12 grid gap-8 rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl md:grid-cols-2 md:p-10">
                <!-- Inputs -->
                <div class="space-y-6">
                    <div>
                        <label class="mb-2 block text-sm font-medium text-slate-300">Monthly Bill (BDT)</label>
                        <div class="relative">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">৳</span>
                            <input
                                v-model="monthlyBill"
                                type="number"
                                min="0"
                                class="w-full rounded-xl border border-white/10 bg-slate-950/60 py-3.5 pl-9 pr-4 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                            />
                        </div>
                    </div>
                    <div>
                        <label class="mb-2 block text-sm font-medium text-slate-300">Avg Unit Rate (BDT / kWh)</label>
                        <input
                            v-model="unitRate"
                            type="number"
                            min="1"
                            step="0.5"
                            class="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                        />
                    </div>
                    <p class="text-sm text-slate-500">≈ {{ totalUnits.toLocaleString() }} kWh / month consumption</p>
                    <button
                        type="button"
                        class="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-base font-semibold text-slate-950 transition-all duration-300 hover:glow-accent"
                        @click="calculate"
                    >
                        Calculate Savings
                        <ArrowRightIcon class="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                <!-- Results -->
                <div class="flex items-center">
                    <Transition
                        enter-active-class="transition duration-500 ease-out"
                        enter-from-class="opacity-0 translate-x-6"
                        enter-to-class="opacity-100 translate-x-0"
                    >
                        <div v-if="showResults" class="w-full space-y-4">
                            <div class="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                                <p class="text-sm text-slate-400">Estimated monthly savings</p>
                                <p class="mt-1 text-3xl font-extrabold text-emerald-400">{{ fmt(results.monthly) }}</p>
                            </div>
                            <div class="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                                <p class="text-sm text-slate-400">Yearly savings</p>
                                <p class="mt-1 text-3xl font-extrabold text-white">{{ fmt(results.yearly) }}</p>
                            </div>
                            <div class="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                                <p class="text-sm text-slate-400">Estimated payback period</p>
                                <p class="mt-1 text-3xl font-extrabold text-accent">{{ results.payback }} yrs</p>
                            </div>
                        </div>
                        <div v-else class="w-full rounded-2xl border border-dashed border-white/15 p-10 text-center">
                            <ChartBarIcon class="mx-auto h-12 w-12 text-slate-600" />
                            <p class="mt-4 text-slate-400">Enter your details and hit calculate to preview your savings.</p>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================ CERTIFICATIONS ============================ -->
    <section class="bg-slate-950 py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div v-reveal class="mx-auto max-w-2xl text-center">
                <span class="text-sm font-semibold uppercase tracking-wider text-accent">Trust &amp; Compliance</span>
                <h2 class="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">Certifications</h2>
                <p class="mt-4 text-slate-400">Documentation available to verified partners on request.</p>
            </div>

            <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    v-for="(c, i) in certs"
                    :key="c.code"
                    v-reveal="{ delay: i * 0.08 }"
                    class="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent/40"
                >
                    <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-2xl font-extrabold text-white ring-1 ring-white/10">
                        {{ c.code }}
                    </div>
                    <p class="mt-4 text-sm text-slate-400">{{ c.name }}</p>
                    <button
                        type="button"
                        class="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-300 transition group-hover:border-accent group-hover:text-accent"
                    >
                        <LockClosedIcon class="h-4 w-4" />
                        Request Access
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
