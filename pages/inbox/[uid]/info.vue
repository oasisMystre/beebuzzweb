<template>
    <div 
        class="container bg-[rgba(0,0,0,0.4)]"
        lg="static w-4/9">
        <div class="page items-end">
            <div 
                class="h-full w-full bg-slate-100"
                sm="w-1/2"
                lg="w-full border-l">
                <div class="bg-white shadow-sm h-4/6">
                    <div class="flex items-center space-x-4 px-4 py-3">
                        <UnoIcon 
                            class="i-mdi-close action"
                            onclick="history.back()" />
                        <p class="flex-1 text-lg font-bold">Profile</p>
                        <UnoIcon class="i-mdi-edit-outline action" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>