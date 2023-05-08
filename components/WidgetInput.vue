<script lang="ts" setup>
    import { Schema } from 'yup';

    interface WidgetInputProp {
        id: string,
        placeholder: string,
        schema: Schema,
        setValue: (id: string, event: Event, schema: Schema) => Promise <any>
    };

    defineEmits(["value"])
    const props = defineProps<WidgetInputProp>();

    const error = ref<string | null>(null);
    const timer = ref <number|null> (null);

    const onInput = function (event: Event) {
        if(timer.value)
            window.clearTimeout(timer.value);

        timer.value = window.setTimeout(() => {
            props.setValue(props.id, event, props.schema)
            .then(() => error.value = null)
            .catch((err: any) => error.value = err.message);
        }, 500);
    };
</script>
<template>
    <div class="col space-y-1">
        <input 
            :placeholder="placeholder" 
            @input="onInput" />
        <p 
            v-if="error"
            class="text-red-500 text-sm capitalize">{{ error }}</p>
    </div>
</template>