<script lang="ts" setup>
    interface DefaultHeaderProp {
        title: string,
    };

    defineProps <DefaultHeaderProp> ();

    const router = useRouter();
</script>
<template>
    <div class="flex items-center space-x-4 p-3">
        <UnoIcon 
            class="i-mdi-close text-2xl text-stone-500"
            @click="router.back" />
        <h1 class="flex-1 text-lg font-semibold">{{ title }}</h1>
    </div>
</template>