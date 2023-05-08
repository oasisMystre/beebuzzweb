<script lang="ts" setup>   
    import { string } from "yup";

    import { getFirestore, getDoc, doc } from "firebase/firestore";

    definePageMeta({
        pageTransition: {
            name: "bounce",
        },
        layoutTransition: {
            name: "bounce"
        }
    });

    const toast = useToast();
    const { disabled, fieldsRef, setValue } = useFields(
        [ "firstName", "lastName", "phoneNumber"], 
        ["firstName", "phoneNumber"]
    );

    const validateName = string().required("First Name is required");

    const onSubmit = function() {
        const phoneNumber = fieldsRef.value["phoneNumber"];

        return getDoc(doc(getFirestore(), phoneNumber))
        .then(value => {
            if(value.exists()){
                // uid contacts data
            } else
                toast.error("{} is not on BeeBuzz yet.")
        }).catch(() => toast.error("Error"));
    };
</script>
<template>
    <div class="container col center bg-overlay">
        <div class="bg-white w-4/5 rounded-lg">
            <DefaultHeader title="Add Contact" />
            <div class="flex items-center space-x-4 p-4">
                <img 
                    src="@/assets/images/avatar.png"
                    class="w-16 h-16 rounded-full" 
                    v-no-pointer />
                <div class="col space-y-4 input-group">
                    <WidgetInput
                        id="firstName"
                        placeholder="First name"
                        :setValue="setValue"
                        :schema="validateName"  />
                    <input 
                        placeholder="Last name" 
                        @input="null" />
                </div>
            </div>
            <div class="col space-y-4 p-4">
                <WidgetInputTel 
                    id="phoneNumber"
                    placeholder="Phone"
                    :setValue="setValue" />
                <button 
                    :disabled="disabled"
                    class="w-full bg-emerald-500 text-white px-4 py-2 rounded-lg disabled:bg-stone-200"
                    @click="onSubmit">Add Contact</button>
            </div>
        </div>
    </div>
</template>