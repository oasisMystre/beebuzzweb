<template>
    <NuxtLink 
        to="/inbox/1/" 
        class="flex space-x-4 p-2">
        <img 
            class="w-12 h-12 object-cover rounded-full" 
            src="~/assets/images/avatar.jpeg" 
            v-no-pointer />
        <div class="flex-1">
            <h1 class="font-bold truncate">TrollShot</h1>
            <p class="text-stone-500 truncate">You: 😂 Sticker</p>
        </div>
        <div class="flex space-x-1 justify-center text-sm text-stone-500">
            <UnoIcon class="i-mdi-check" />
            <span>11:03 AM</span>
        </div>
    </NuxtLink>
</template>