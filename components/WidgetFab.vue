<script lang="ts" setup>
    interface WidgetFabProp {
        icon: string,
        path: string,
    };

    defineProps <WidgetFabProp> ();
</script>
<template>
    <NuxtLink 
        :to="path"
        class="p-3 bg-emerald rounded-full">
        <UnoIcon 
            :class="[icon]"
            class="text-2xl text-white" />
    </NuxtLink>
</template>