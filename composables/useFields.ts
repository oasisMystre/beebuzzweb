import { Schema, ValidationError } from "yup";

export default function useFields(fields: string[], required: string[]) {
    const fieldsRef = ref<Record<string, any>>({});
    const requiredRef = ref<Record<string, boolean>>({});

    for (const key of fields)
        fieldsRef.value[key] = null;

    for (const key of required)
        requiredRef.value[key] = true;

    const disabled = computed(() => Object.values(requiredRef.value).some(value => value));

    const setValue = async function (key: string, event: Event, schema: Schema) {
        const value = (event.target as HTMLInputElement).value;

        fieldsRef.value[key] = value;

        return schema.validate(value).then(() => {
            requiredRef.value[key] = false;
        }).catch((error: ValidationError) => {
            requiredRef.value[key] = true;
            
            throw error;
        });
    }

    return { fieldsRef, requiredRef, disabled, setValue };
};