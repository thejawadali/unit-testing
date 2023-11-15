<template>
  <div>
    <nav>
      <slot name="header" />
    </nav>
    <slot name="scoped" v-bind="{ msg }" />
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup>
const msg = "this is a custom messages from scoped slot"
</script>