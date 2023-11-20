<script setup>
import { useCounterStore } from "./store/counter";
const counter = useCounterStore()
</script>

<template>
  {{counter.count}}
  <button @click="counter.incrementCount">INC</button>
</template>

<style scoped></style>
