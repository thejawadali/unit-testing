<template>
  <div>
    <h1>
      {{ ha ? greeting : 'good bye' }}
    </h1>
    <p @click="emit('change')">{{formattedName}}</p>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const firstName = ref('John');
const lastName = ref('Doe');

const formattedName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

const props = defineProps({
  greeting: String,
  ha: Boolean
})

const emit = defineEmits(['change'])

</script>