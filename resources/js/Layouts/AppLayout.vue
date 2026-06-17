<script setup>
import { computed, ref, watch } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'
import { useScroll } from '@vueuse/core'
import { Bars3Icon, XMarkIcon, BoltIcon } from '@heroicons/vue/24/outline'

const page = usePage()

const navLinks = [
    { label: 'Home', href: '/', name: 'home' },
    { label: 'BESS & Solar', href: '/bess-solar', name: 'bess-solar' },
    { label: 'Palash EV', href: '/palash-ev', name: 'palash-ev' },
    { label: 'About', href: '/about', name: 'about' },
    { label: 'Careers', href: '/careers', name: 'careers' },
]

// Scroll-aware navbar (blur + border after 50px)
const { y } = useScroll(window)
const scrolled = computed(() => y.value > 50)

// Mobile menu
const mobileOpen = ref(false)
const currentUrl = computed(() => page.url)

// Close the mobile menu whenever the route changes
watch(currentUrl, () => {
    mobileOpen.value = false
})

const isActive = (href) =>
    href === '/' ? currentUrl.value === '/' : currentUrl.value.startsWith(href)

const year = new Date().getFullYear()
</script>

<template>
    <div class="min-h-screen bg-slate-950 text-slate-100">
        <!-- ============================= NAVBAR ============================= -->
        <header
            class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
            :class="
                scrolled
                    ? 'border-b border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-lg shadow-slate-950/40'
                    : 'border-b border-transparent bg-transparent'
            "
        >
            <nav class="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
                <!-- Logo -->
                <Link href="/" class="group flex items-center gap-2.5">
                    <span
                        class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-105"
                    >
                        <BoltIcon class="h-5 w-5 text-white" />
                        <span
                            class="absolute inset-0 -z-10 rounded-xl bg-accent/40 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                    </span>
                    <span class="text-lg font-extrabold tracking-tight text-white">
                        Ahead<span class="text-accent">Solar</span>
                    </span>
                </Link>

                <!-- Desktop links -->
                <div class="hidden items-center gap-1 lg:flex">
                    <Link
                        v-for="link in navLinks"
                        :key="link.name"
                        :href="link.href"
                        class="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
                        :class="
                            isActive(link.href)
                                ? 'text-white'
                                : 'text-slate-300 hover:text-white'
                        "
                    >
                        {{ link.label }}
                        <span
                            v-if="isActive(link.href)"
                            class="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                        />
                    </Link>
                </div>

                <!-- Desktop CTA -->
                <div class="hidden lg:block">
                    <Link
                        href="/bess-solar"
                        class="group relative inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:glow-accent"
                    >
                        Get Quote
                        <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                </div>

                <!-- Mobile hamburger -->
                <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 transition hover:bg-white/10 lg:hidden"
                    aria-label="Open menu"
                    @click="mobileOpen = true"
                >
                    <Bars3Icon class="h-7 w-7" />
                </button>
            </nav>
        </header>

        <!-- ====================== MOBILE FULLSCREEN MENU ====================== -->
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
        >
            <div v-if="mobileOpen" class="fixed inset-0 z-[60] mesh-dark lg:hidden">
                <div class="flex h-18 items-center justify-between px-6">
                    <span class="text-lg font-extrabold text-white">
                        Ahead<span class="text-accent">Solar</span>
                    </span>
                    <button
                        type="button"
                        class="rounded-lg p-2 text-slate-200 transition hover:bg-white/10"
                        aria-label="Close menu"
                        @click="mobileOpen = false"
                    >
                        <XMarkIcon class="h-7 w-7" />
                    </button>
                </div>

                <div class="flex flex-col gap-2 px-6 pt-8">
                    <Link
                        v-for="link in navLinks"
                        :key="link.name"
                        :href="link.href"
                        class="rounded-2xl px-5 py-4 text-2xl font-semibold transition"
                        :class="
                            isActive(link.href)
                                ? 'bg-white/10 text-accent'
                                : 'text-slate-200 hover:bg-white/5 hover:text-white'
                        "
                    >
                        {{ link.label }}
                    </Link>

                    <Link
                        href="/bess-solar"
                        class="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-lg font-semibold text-slate-950 glow-accent"
                    >
                        Get Quote →
                    </Link>
                </div>
            </div>
        </Transition>

        <!-- ============================= PAGE BODY ============================= -->
        <Transition name="page" mode="out-in" appear>
            <main :key="currentUrl">
                <slot />
            </main>
        </Transition>

        <!-- ============================== FOOTER ============================== -->
        <footer class="relative border-t border-white/10 bg-slate-950">
            <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div class="grid gap-12 lg:grid-cols-4">
                    <!-- Brand -->
                    <div class="lg:col-span-1">
                        <div class="flex items-center gap-2.5">
                            <span
                                class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30"
                            >
                                <BoltIcon class="h-5 w-5 text-white" />
                            </span>
                            <span class="text-lg font-extrabold tracking-tight text-white">
                                Ahead<span class="text-accent">Solar</span>
                            </span>
                        </div>
                        <p class="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
                            Powering Bangladesh's clean energy transition — battery storage, solar,
                            and the Palash EV mobility network.
                        </p>
                    </div>

                    <!-- Solutions -->
                    <div>
                        <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            Solutions
                        </h4>
                        <ul class="mt-5 space-y-3 text-sm">
                            <li>
                                <Link href="/bess-solar" class="text-slate-400 transition hover:text-accent">BESS Storage</Link>
                            </li>
                            <li>
                                <Link href="/bess-solar" class="text-slate-400 transition hover:text-accent">Solar Panels</Link>
                            </li>
                            <li>
                                <Link href="/palash-ev" class="text-slate-400 transition hover:text-accent">Palash EV Mobility</Link>
                            </li>
                            <li>
                                <Link href="/palash-ev" class="text-slate-400 transition hover:text-accent">Charging Network</Link>
                            </li>
                        </ul>
                    </div>

                    <!-- Company -->
                    <div>
                        <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            Company
                        </h4>
                        <ul class="mt-5 space-y-3 text-sm">
                            <li><Link href="/about" class="text-slate-400 transition hover:text-accent">About Us</Link></li>
                            <li><Link href="/careers" class="text-slate-400 transition hover:text-accent">Careers</Link></li>
                            <li><Link href="/about" class="text-slate-400 transition hover:text-accent">Leadership</Link></li>
                            <li><Link href="/about" class="text-slate-400 transition hover:text-accent">Manufacturing</Link></li>
                        </ul>
                    </div>

                    <!-- Connect -->
                    <div>
                        <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            Connect
                        </h4>
                        <ul class="mt-5 space-y-3 text-sm">
                            <li><a href="#" class="text-slate-400 transition hover:text-accent">hello@aheadsolar.com</a></li>
                            <li><a href="#" class="text-slate-400 transition hover:text-accent">+880 1700 000000</a></li>
                            <li><a href="#" class="text-slate-400 transition hover:text-accent">Gulshan, Dhaka 1212</a></li>
                            <li class="flex gap-3 pt-2">
                                <a href="#" class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition hover:bg-accent hover:text-slate-950">in</a>
                                <a href="#" class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition hover:bg-accent hover:text-slate-950">X</a>
                                <a href="#" class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition hover:bg-accent hover:text-slate-950">f</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Divider + copyright -->
                <div class="mt-14 border-t border-white/10 pt-8">
                    <div class="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
                        <p>© {{ year }} Ahead Solar Ltd. All rights reserved.</p>
                        <p class="flex items-center gap-2">
                            <span class="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                            Demo build — Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
