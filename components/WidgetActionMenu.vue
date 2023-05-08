<script lang="ts" setup>
    import {offset, autoUpdate, Placement } from "@floating-ui/vue";

    import { Action } from "./WidgetAction.vue";


    interface ActionMenuProp {
        id?: number,
        icon?: string,
        selectClass?: string|null,
        unSelectClass?: string,
        placement?: Placement,
        actions: Action[],
    };

    const props = withDefaults(defineProps <ActionMenuProp>(), {
        placement: "top-end",
        selectClass: "text-emerald-500",
        unSelectClass: "text-stone-500",
    });

    const menu = ref(null);
    const button = ref(null);
    const visible = ref(false);

    const { floatingStyles: style } = useFloating(button, menu, {
        whileElementsMounted: autoUpdate,
        placement: props.placement,
        middleware: [
            offset(24), 
        ],
    });
</script>
<template>
    <div>
        <div 
            ref="button" 
            @click.stop="visible = !visible">
            <UnoIcon
                v-if="icon"
                :class="[icon, visible ? selectClass : unSelectClass ]"
                class="text-2xl" />
            <slot 
                v-else 
                :visible="visible" />
        </div>
        <Transition name="fade">
            <div                 
                v-if="visible"
                class="container">
                <WidgetContextMenu 
                    ref="menu" 
                    :style="style"
                    :actions="actions"
                    v-menu="{id}"
                    @menu:open="visible = false"/>
            </div>
        </Transition>
    </div>
</template>