<script setup>
import { ref } from 'vue'
import { Head } from '@inertiajs/vue3'
import {
    XMarkIcon,
    ArrowTrendingUpIcon,
    UserGroupIcon,
    LightBulbIcon,
    GlobeAltIcon,
    DocumentArrowUpIcon,
    BriefcaseIcon,
    MapPinIcon,
} from '@heroicons/vue/24/outline'

const jobs = [
    { title: 'Frontend Developer', dept: 'Engineering', type: 'Full-time', location: 'Dhaka' },
    { title: 'Solar Installation Engineer', dept: 'Operations', type: 'Full-time', location: 'Chittagong' },
    { title: 'Sales Executive (B2B)', dept: 'Sales', type: 'Remote', location: 'Bangladesh' },
]

const culture = [
    { icon: ArrowTrendingUpIcon, title: 'Growth', desc: 'Clear paths, mentorship and room to own real impact early.' },
    { icon: UserGroupIcon, title: 'Teamwork', desc: 'Cross-functional crews that ship hardware and software together.' },
    { icon: LightBulbIcon, title: 'Innovation', desc: 'We prototype locally and challenge how things have always been done.' },
    { icon: GlobeAltIcon, title: 'Impact', desc: 'Every role moves Bangladesh closer to clean energy independence.' },
]

// ---- Apply modal ----
const modalOpen = ref(false)
const submitted = ref(false)
const form = ref({ name: '', email: '', phone: '', position: '', cv: '', message: '' })

const openApply = (job) => {
    submitted.value = false
    form.value = { name: '', email: '', phone: '', position: job.title, cv: '', message: '' }
    modalOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modalOpen.value = false
    document.body.style.overflow = ''
}

const onFile = (e) => {
    form.value.cv = e.target.files?.[0]?.name || ''
}

const submit = () => {
    // Frontend demo only — no backend.
    submitted.value = true
}
</script>

<template>
    <Head title="Careers" />

    <!-- ================================ HERO ================================ -->
    <section class="relative overflow-hidden mesh-dark pt-32 pb-20">
        <div class="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-accent/20 blur-[130px]"></div>
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <span v-reveal class="text-sm font-semibold uppercase tracking-wider text-accent">Careers</span>
            <h1 v-reveal="{ delay: 0.05 }" class="mt-4 max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
                Build what powers <span class="text-gradient">the future.</span>
            </h1>
            <p v-reveal="{ delay: 0.12 }" class="mt-6 max-w-2xl text-lg text-slate-300">
                Join a team turning clean-energy ambition into hardware on the ground. Open roles
                across engineering, operations and sales.
            </p>
        </div>
    </section>

    <!-- ============================ JOB CARDS ============================ -->
    <section class="bg-slate-950 py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div v-reveal class="max-w-2xl">
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">Open positions</h2>
                <p class="mt-3 text-slate-400">{{ jobs.length }} roles currently hiring.</p>
            </div>

            <div class="mt-12 space-y-5">
                <div
                    v-for="(job, i) in jobs"
                    :key="job.title"
                    v-reveal="{ delay: i * 0.08 }"
                    class="group flex flex-col gap-5 rounded-3xl border border-white/10 bg-slate-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 sm:flex-row sm:items-center sm:justify-between"
                >
                    <div>
                        <h3 class="text-xl font-bold text-white">{{ job.title }}</h3>
                        <div class="mt-3 flex flex-wrap items-center gap-2 text-sm">
                            <span class="rounded-full bg-primary/15 px-3 py-1 font-medium text-primary ring-1 ring-primary/25">{{ job.dept }}</span>
                            <span class="rounded-full bg-white/5 px-3 py-1 font-medium text-slate-300 ring-1 ring-white/10">{{ job.type }}</span>
                            <span class="inline-flex items-center gap-1 text-slate-400">
                                <MapPinIcon class="h-4 w-4" /> {{ job.location }}
                            </span>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:glow-accent"
                        @click="openApply(job)"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================ CULTURE ============================ -->
    <section class="relative overflow-hidden mesh-dark py-24">
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div v-reveal class="mx-auto max-w-2xl text-center">
                <span class="text-sm font-semibold uppercase tracking-wider text-accent">Why us</span>
                <h2 class="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">Life at Ahead Solar</h2>
            </div>

            <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    v-for="(c, i) in culture"
                    :key="c.title"
                    v-reveal="{ delay: i * 0.08 }"
                    class="glass rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-white/25"
                >
                    <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent ring-1 ring-accent/25">
                        <component :is="c.icon" class="h-7 w-7" />
                    </div>
                    <h3 class="mt-5 text-lg font-bold text-white">{{ c.title }}</h3>
                    <p class="mt-2 text-sm text-slate-400">{{ c.desc }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================ APPLY MODAL ============================ -->
    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="modalOpen"
                class="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm"
                @click.self="closeModal"
            >
                <Transition
                    enter-active-class="transition duration-300 ease-out delay-75"
                    enter-from-class="opacity-0 translate-y-6 scale-95"
                    enter-to-class="opacity-100 translate-y-0 scale-100"
                >
                    <div
                        v-if="modalOpen"
                        class="relative my-8 w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl"
                    >
                        <button
                            type="button"
                            class="absolute right-5 top-5 rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                            aria-label="Close"
                            @click="closeModal"
                        >
                            <XMarkIcon class="h-6 w-6" />
                        </button>

                        <!-- Success state -->
                        <div v-if="submitted" class="py-8 text-center">
                            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400 ring-1 ring-emerald-400/30">
                                <BriefcaseIcon class="h-8 w-8" />
                            </div>
                            <h3 class="mt-5 text-2xl font-bold text-white">Application received</h3>
                            <p class="mt-2 text-slate-400">
                                Thanks for applying for <span class="font-semibold text-accent">{{ form.position }}</span>.
                                This is a demo — no data was actually submitted.
                            </p>
                            <button
                                type="button"
                                class="mt-6 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:glow-accent"
                                @click="closeModal"
                            >
                                Done
                            </button>
                        </div>

                        <!-- Form state -->
                        <form v-else @submit.prevent="submit">
                            <h3 class="text-2xl font-bold text-white">Apply Now</h3>
                            <p class="mt-1 text-sm text-slate-400">Tell us about yourself.</p>

                            <div class="mt-6 space-y-4">
                                <div>
                                    <label class="mb-1.5 block text-sm font-medium text-slate-300">Full Name</label>
                                    <input v-model="form.name" type="text" required placeholder="Your name"
                                        class="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
                                </div>
                                <div class="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label class="mb-1.5 block text-sm font-medium text-slate-300">Email</label>
                                        <input v-model="form.email" type="email" required placeholder="you@email.com"
                                            class="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
                                    </div>
                                    <div>
                                        <label class="mb-1.5 block text-sm font-medium text-slate-300">Phone</label>
                                        <input v-model="form.phone" type="tel" placeholder="+880…"
                                            class="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
                                    </div>
                                </div>
                                <div>
                                    <label class="mb-1.5 block text-sm font-medium text-slate-300">Position</label>
                                    <input v-model="form.position" type="text" readonly
                                        class="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 font-medium text-accent outline-none" />
                                </div>
                                <div>
                                    <label class="mb-1.5 block text-sm font-medium text-slate-300">Upload CV</label>
                                    <label class="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/20 bg-slate-950/40 px-4 py-3 text-slate-400 transition hover:border-accent/50 hover:text-white">
                                        <DocumentArrowUpIcon class="h-5 w-5" />
                                        <span class="truncate text-sm">{{ form.cv || 'Choose a PDF or DOCX…' }}</span>
                                        <input type="file" class="hidden" accept=".pdf,.doc,.docx" @change="onFile" />
                                    </label>
                                </div>
                                <div>
                                    <label class="mb-1.5 block text-sm font-medium text-slate-300">Message</label>
                                    <textarea v-model="form.message" rows="3" placeholder="Why are you a great fit?"
                                        class="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"></textarea>
                                </div>
                            </div>

                            <button type="submit"
                                class="mt-6 w-full rounded-xl bg-accent py-3.5 text-base font-semibold text-slate-950 transition-all duration-300 hover:glow-accent">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>
