<template>
    <div class="container">
        <div 
            class="col h-full w-full bg-white" 
            sm="w-1/2" 
            lg="w-1/3">
            <div class="flex-1">
                <div class="flex items-center space-x-4 p-2">
                    <UnoIcon 
                        class="i-mdi-arrow-left text-2xl text-stone-500" 
                        onclick="history.back()" />
                    <WidgetSearch class="flex-1" />
                </div>
            </div>
            <div class="col items-end justify-end p-4">
                <WidgetFab 
                    icon="i-mdi-plus" 
                    path="/inbox/contacts/add/" />
            </div>
        </div>
        <NuxtPage />
    </div>
</template>