<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { doStandardGet } from '@/networkTools'

onMounted(async () => {
  let data = await doStandardGet("/isit")
  isItChristmasTimeAnswer.value = data.answer
  isItChristmasTimeExplanation.value = data.explanation
});

const isItChristmasTimeAnswer = ref<String>("")
const isItChristmasTimeExplanation = ref<String>("")
</script>

<template>
  <header>
    <h1>Is It Christmas Time???</h1>
    <p id="answer" v-text="isItChristmasTimeAnswer"/>
    <p v-text="isItChristmasTimeExplanation"/>
  </header>

  <RouterView />

  <footer>
    <p>A random side project by <a href="http://webecke.dev">Dallin Webecke</a></p>
  </footer>
</template>

<style scoped>
#answer {
  font-size: 100px;
  text-align: center;
}

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
