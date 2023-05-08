<script lang="ts" setup>
    export interface Action {
        icon: string,
        label: string,
        class?: string,
        path?: string,
        onClick?: (action: Action) => void
    };

    interface ActionProp {
        action: Action,
    };

    defineProps <ActionProp> ();
</script>
<template>
    <div
        :class="[action.class ? action.class : 'text-slate-700']"
        class="flex space-x-4 items-center cursor-pointer p-2"
        @click="action.onClick(action)">
        <UnoIcon 
            :class="[action.icon]"
            class="text-2xl" />
        <p class="flex-1 font-medium text-left">{{ action.label }}</p>
    </div>
</template>