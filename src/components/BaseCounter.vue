<template>
  <div>
    <p>{{ counter }}</p>
    <button id="inc" @click="inc" style="margin-right: 4rem; background: green; color: #fff;">Inc</button>
    <button id="dec" @click="dec">Dec</button>
  </div>
</template>

<script setup>
import { ref } from "vue"

const counter = ref( 0 )

const inc = () => {
  counter.value = counter.value + 1
}
const dec = () => {
  counter.value = counter.value - 1
}

</script>