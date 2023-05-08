<script lang="ts" setup>
    import * as  yup from 'yup';
    import "yup-phone-lite";

    interface WidgetInputProp {
        id: string,
        placeholder: string,
        setValue: (id: string, event: Event, schema: yup.Schema) => Promise <any>
    };

    defineEmits(["value"]);

    const props = defineProps<WidgetInputProp>();

    const countryCode = ref("+234");
    const error = ref<string | null>(null);
    const timer = ref <number|null> (null);


    const schema = yup.string()
    .transform(value => countryCode.value + value)
    .phone("NG", "Please enter a valid phone number")
    .required("A phone number is required");


    const onInput = function (event: Event) {
        if(timer.value)
            window.clearTimeout(timer.value);

        timer.value = window.setTimeout(() => {
            props.setValue(props.id, event, schema)
            .then(() => error.value = null)
            .catch((err: any) => error.value = err.message);
        }, 500);    
    };
</script>
<template>
    <div class="col space-y-1">
        <div class="flex space-x-2 input">
            <select 
                class="bg-transparent"
                :disabled="true">
                <option>+234</option>
            </select>
            <input 
                :placeholder="placeholder"
                class="flex-1"
                type="tel"
                @input="onInput" />
        </div>
        <p 
            v-if="error"
            class="text-red-500 text-sm capitalize">{{ error }}</p>
    </div>
</template>