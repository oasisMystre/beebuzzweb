<script lang="ts" setup>
    import { defaultFabActions } from '~/utils/ui/actions';

    definePageMeta({
        pageTransition: {
            name: "bounce",
        },
        layoutTransition: {
            name: "bounce"
        }
    });

</script>
<template>
    <div
        class="page"
        sm="flex-row">
        <div 
            id="inbox-page"
            class="flex-1 col space-y-4 overflow-scroll" 
            sm="flex-none w-5/11"
            md="w-4/9"
            lg="w-1/3">
            <InboxToolbar class="sticky top-0" />
            <div class="flex-1">
                <InboxList />
            </div>
            <div class="flex justify-end pr-4 pb-4 sticky bottom-0">
                <WidgetActionMenu 
                    v-slot="{ visible }"
                    :actions="defaultFabActions">
                    <button class="w-12 h-12 flex center bg-emerald-500 rounded-full">
                        <UnoIcon
                            :class="[visible ? 'i-mdi-close' : 'i-mdi-edit-outline' ]"
                            class="text-2xl text-white" />
                    </button>
                </WidgetActionMenu>

            </div>
        </div>
        <div sm="flex-1 bg-[url(~/assets/images/patterns/default.svg)] bg-center bg-slate-400">
            <NuxtPage />
        </div>
    </div>
</template>