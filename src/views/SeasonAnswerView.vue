<script setup lang="ts">
import { BASE_URL } from '@/networkTools';
import { onMounted, ref } from 'vue';

onMounted( async () => {
    const response = await fetch(BASE_URL + "/test-cors", {
        method: 'GET', // or 'POST', 'PUT', etc. depending on your worker's method
        headers: {
        'Content-Type': 'application/json', // adjust headers as needed
        // Add any other headers your worker might need, like authorization
        },
    });
    console.log("snakes")
    answer.value = await response.text()
})
    const answer = ref<string>("not yet")
</script>

<template>
    <div>
        <p>NO</p>
        <p v-text="answer"></p>
    </div>
    <div>

    </div>
</template>

<style>
@media (min-width: 1024px) {
.about {
    min-height: 100vh;
    display: flex;
    align-items: center;
}
}
</style>