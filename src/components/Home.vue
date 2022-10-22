<script setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="container shadow-lg mx-auto bg-white pt-24 md:pt-16 h-screen">
    <div>
      <button class="btn" @click="counter.increment">Counter is: {{ counter.count }}</button>
    </div>
  </div>
</template>