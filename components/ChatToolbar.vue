<script lang="ts" setup>
    import { chatMenuActions } from '~/utils/ui/actions';

</script>
<template>
    <div class="flex items-center space-x-4 bg-white px-2 py-1 border-l shadow-lg">
        <span 
            class="i-mdi-arrow-left action"
            sm="hidden"
            onclick="history.back()" />
        <NuxtLink 
            to="/inbox/1/info/"
            class="flex-1 flex space-x-4">
            <img 
                class="w-12 h-12 object-cover rounded-full"
                src="~/assets/images/avatar.jpeg"
                v-no-pointer />
            <div>
                <h1 class="font-medium">TrollShot</h1>
                <p class="text-sm text-stone-500">3 members</p>
            </div>
        </NuxtLink>
        <div class="flex space-x-6 action__group">
            <span class="i-mdi-video-outline" />
            <span class="i-mdi-search" />
            <WidgetActionMenu 
                :id="Math.random()"
                :actions="chatMenuActions" 
                placement="bottom-end"
                icon="i-mdi-more-vert text-stone-500" />
        </div>
    </div>
</template>
<style>
    .action {
        --at-apply: text-2xl text-stone-500;
    }
    .action__group span {
        --at-apply: text-2xl text-stone-500;
    }
</style>