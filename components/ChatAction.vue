<script lang="ts" setup>
    import { attachmentActions } from '~/utils/ui/actions';

    const canSend = ref(false);
    const text = ref <string|null>(null);

    const textEl = ref <HTMLDivElement|null>(null);

    watch(text, value => {
        canSend.value = value ? value.trim().length > 0 : false;
    });

    const onSelectEmoji = function(emoji: any){
        text.value = text.value ? text.value + emoji.i : emoji.i;
        textEl.value!.innerHTML = text.value!;
    };
</script>
<template>
    <div class="flex items-center space-x-4">
        <div class="flex-1 flex items-center space-x-2 bg-slate-100 ext-white px-2 rounded-xl">
            <WidgetEmojiPopup @select="onSelectEmoji" />
            <div
                ref="textEl"
                class="flex-1 py-3 max-h-24 overflow-scroll"
                role="textbox" 
                placeholder="Message" 
                @input="event => text = (event.target as HTMLDivElement).innerHTML"
                contenteditable="true" />
            <WidgetActionMenu 
                icon="i-mdi-attachment"
                :id="Math.random()"
                :actions="attachmentActions" />
        </div>
        <button class="w-12 h-12 flex center bg-emerald-500 rounded-full">
            <UnoIcon 
                :class="[canSend ? 'i-mdi-send' : 'i-mdi-microphone']"
                class="text-xl text-white" />
        </button>
    </div>
</template>
<style>

</style>