<script lang="ts" setup>
    import { defaultMenuActions } from '~/utils/ui/actions';
</script>
<template>
    <div class="flex items-center space-x-4 bg-white border-b shadow p-2">
        <WidgetActionMenu 
            icon="i-mdi-menu" 
            selectClass="text-stone-500"
            placement="bottom-start" 
            :actions="defaultMenuActions" />
        <WidgetSearch class="flex-1" />
    </div>
</template>