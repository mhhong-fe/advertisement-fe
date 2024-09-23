<template>
    <div class="w-100vw h-100vh">
        <div :class="$style.title">
            子应用Ad
        </div>
        <RouterView />
    </div>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
.title {
    font-size: 30px;
    font-weight: 500;
}
</style>
