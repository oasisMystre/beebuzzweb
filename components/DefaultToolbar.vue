<script lang="ts" setup>
    defineProps <{ title: string }> ();

    const router = useRouter();
</script>
<template>
    <div 
        class="flex items-center space-x-4 p-2 shadow">
        <UnoIcon 
            class="i-mdi-arrow-back action" 
            @click="router.back" />
        <p class="flex-1 text-lg font-bold">{{ title }}</p>
    </div>
</template>