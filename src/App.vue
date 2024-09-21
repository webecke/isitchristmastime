<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { potatoGet } from '@/testNetwork'

onMounted(async () => {
  console.log("Potato go")
  testString.value = await potatoGet();
  console.log("Potato come: " + testString.value)
});

const testString = ref<String>("not set")
</script>

<template>
  <header>
    <h1>Is It Christmas Time???</h1>
    <h2 v-html="testString"/>
  </header>

  <RouterView />

  <footer>
    <p>A random side project by <a href="http://webecke.dev">Dallin Webecke</a></p>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
