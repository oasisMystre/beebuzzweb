<script lang="ts" setup>

</script>
<template>
    <div 
        class="container" 
        sm="static flex h-full">
        <div class="flex-1 page bg-[url(~/assets/images/patterns/default.svg)] bg-center bg-slate-500">
            <ChatToolbar 
                class="static top-0" />
            <div class="flex-1 col center p-4">
                <div class="col space-y-4 text-center bg-[rgba(0,0,0,0.7)] text-white w-56 h-56 p-2 rounded-lg">
                    <h1 class="font-bold">No messages here yet</h1>
                    <div class="col">
                        <p class="text-sm text-stone-300">Send a message or tap the greeting below</p>
                    </div>
                </div>
            </div>
            <div class="col p-2">
                <ChatAction />
            </div>
        </div>
        <NuxtPage />
    </div>
</template>