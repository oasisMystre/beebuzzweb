<script lang="ts" setup>
    interface ActionMenuProp {
        id?: number,
    };

    withDefaults(defineProps<ActionMenuProp>(), {
        id: Math.random(),
    });

    const emit = defineEmits(["select"]);

    const visible = ref(false);
</script>
<template>
    <div>
        <UnoIcon 
            ref="button" 
            :class="[visible ? 'text-emerald-500' : 'text-stone-500']"
            class="text-2xl i-mdi-emoji-outline" 
            @click.stop="visible = !visible" />
        <Transition name="fade">
            <div      
                v-if="visible"
                class="fixed bottom-16">
                <ClientOnly>
                <EmojiPicker 
                    :disable-skin-tones="true"
                    :disable-sticky-group-names="true"
                    v-menu="{id}"
                    @select="(value: any) => emit('select', value)"
                    @menu:open="visible = false" />
            </ClientOnly>
            </div>
        </Transition>
    </div>
</template>
<style>
    .v3-footer {
        display: none!important;
    }
</style>