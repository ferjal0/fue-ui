<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const button = cva(
  'inline-flex items-center gap-2 rounded-lg font-inherit font-semibold antialiased border-none focus:border-transparent outline-none focus:outline-none focus:ring-4 select-none transition-all duration-200',
  {
    variants: {
      intent: {
        primary:
          'text-white bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-100 focus:ring-blue-100',
        secondary:
          'text-white bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-100 focus:ring-green-100',
        tertiary:
          'text-white bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-100 focus:ring-yellow-100',
        danger:
          'text-white bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-100 focus:ring-red-100'
      },
      size: {
        sm: 'text-sm py-2 px-3.5',
        md: 'text-sm py-2.5 px-4',
        lg: 'py-2.5 px-4.5',
        xl: 'py-3 px-5'
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: ''
      }
    }
  }
)

type ButtonProps = VariantProps<typeof button>

withDefaults(
  defineProps<{
    intent: ButtonProps['intent']
    size: ButtonProps['size']
    disabled: ButtonProps['disabled']
  }>(),
  {
    intent: 'primary',
    size: 'md',
    disabled: false
  }
)
</script>

<template>
  <button :class="twMerge(button({ intent, size, disabled }))" :disabled="!!disabled">
    <slot />
  </button>
</template>
