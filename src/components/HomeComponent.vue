<script setup lang="ts">
    import { RouterLink, RouterView } from "vue-router"
</script>

<template>
    <h2>
        Home Component
    </h2>
    <div>
        <RouterLink to="/firstPage">Go To FirstPage</RouterLink>
    </div>
    <div>
        <RouterLink to="/secondPage">Go To SecondPage</RouterLink>
    </div>
    <RouterView></RouterView>
</template>