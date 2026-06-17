import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import gsap from 'gsap'
import AppLayout from '@/Layouts/AppLayout.vue'

const pages = import.meta.glob('./Pages/**/*.vue')

/**
 * Global scroll-reveal directive.
 * Usage: v-reveal  or  v-reveal="{ delay: 0.15, y: 60 }"
 * Fades + slides an element in (via GSAP) the first time it enters the viewport.
 */
const reveal = {
    mounted(el, binding) {
        const opts = binding.value || {}
        const y = opts.y ?? 40
        const delay = opts.delay ?? 0
        const duration = opts.duration ?? 0.8

        gsap.set(el, { autoAlpha: 0, y })

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.to(el, {
                            autoAlpha: 1,
                            y: 0,
                            duration,
                            delay,
                            ease: 'power3.out',
                        })
                        io.unobserve(el)
                    }
                })
            },
            { threshold: 0.12 }
        )
        io.observe(el)
        el._revealIO = io
    },
    unmounted(el) {
        el._revealIO?.disconnect()
    },
}

createInertiaApp({
    title: (title) => (title ? `${title} — Ahead Solar` : 'Ahead Solar'),

    resolve: async (name) => {
        const importPage = pages[`./Pages/${name}.vue`]

        if (!importPage) {
            throw new Error(`Inertia page not found: ${name}`)
        }

        const module = await importPage()
        const page = module.default

        // Apply the shared layout by default (persistent across visits).
        page.layout = page.layout || AppLayout

        return page
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .directive('reveal', reveal)
            .mount(el)
    },

    progress: {
        color: '#f4a500',
        showSpinner: false,
    },
})
