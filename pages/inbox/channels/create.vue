<template>
    <div class="container bg-[rgba(0,0,0,0.4)]">
        <div 
                class="col h-full w-full bg-slate-100"
                sm="w-1/2"
                lg="w-1/3">
                <div class="col space-y-4 bg-white shadow-sm pb-4">
                    <DefaultToolbar title="New Channel" />
                    <div class="flex-1 col center space-y-8 px-4">
                        <DefaultEditAvatar />
                        <input 
                            class="w-full border p-2 rounded focus:border-emerald-500 focus:ring-3 ring-offset-0.5 ring-emerald-300"
                            placeholder="Channel Name" />
                        <input 
                            class="w-full border p-2 rounded focus:border-emerald-500 focus:ring-3 ring-offset-0.5 ring-emerald-300"
                            placeholder="Description (Optional)" />
                    </div>
                </div>
                <div class="flex-1 col items-end justify-end p-4">
                    <button class="p-3 bg-emerald rounded-full">
                        <UnoIcon class="i-mdi-arrow-right text-2xl text-white" />
                    </button>
                </div>
            </div>
    </div>
</template>