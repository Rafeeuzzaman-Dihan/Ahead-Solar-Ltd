<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import gsap from 'gsap'

const props = defineProps({
    value: { type: Number, required: true },
    prefix: { type: String, default: '' },
    suffix: { type: String, default: '' },
    decimals: { type: Number, default: 0 },
    duration: { type: Number, default: 2.2 },
})

const target = ref(null)
const display = ref(formatted(0))
let played = false

function formatted(n) {
    return n.toLocaleString('en-US', {
        minimumFractionDigits: props.decimals,
        maximumFractionDigits: props.decimals,
    })
}

const { stop } = useIntersectionObserver(
    target,
    ([entry]) => {
        if (entry?.isIntersecting && !played) {
            played = true
            const obj = { n: 0 }
            gsap.to(obj, {
                n: props.value,
                duration: props.duration,
                ease: 'power2.out',
                onUpdate: () => {
                    display.value = formatted(obj.n)
                },
            })
            stop()
        }
    },
    { threshold: 0.4 }
)
</script>

<template>
    <span ref="target">{{ prefix }}{{ display }}{{ suffix }}</span>
</template>
