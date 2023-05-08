<script lang="ts" setup>
    import { Action } from './WidgetAction.vue';

    interface ContextMenu {
        title?: string,
        actions: Action[],
    };

    defineProps<ContextMenu>();
</script>
<template>
    <div class="col bg-white text-black shadow-lg border rounded-lg">
        <WidgetAction
            v-for="action, index in actions"
            :key="index"
            :action="action" />
    </div>
</template>