<script lang="ts" setup>   
    import { string } from "yup";

    import { getFirestore, getDoc, addDoc, doc, collection, where } from "firebase/firestore";
    
    import { addContactErrorHandler } from "~/utils/handlers/error";

    definePageMeta({
        pageTransition: {
            name: "bounce",
        },
        layoutTransition: {
            name: "bounce"
        }
    });

    const toast = useToast();
    const { useAuthStore } = useStore();
    const authStore = useAuthStore();

    const { disabled, fieldsRef, setValue } = useFields(
        [ "firstName", "lastName", "phoneNumber"], 
        ["firstName", "phoneNumber"]
    );

    const loading = ref(false);

    const displayName = computed(() => fieldsRef.value["firstName"]);
    const user = computed(() => authStore.user);

    const onSubmit = function() {
        if(loading.value)
            return;
        loading.value = true;
        const phoneNumber = fieldsRef.value["phoneNumber"];

        return authStore.firebaseProvider.filterUsers(where("phoneNumber", "==", phoneNumber))
        .then(async snapshots => {
            if(snapshots.docs.length > 0)
                await addDoc(collection(getFirestore(), user.value!.uid, "contacts"), snapshots.docs[0]);
            else
                toast.error(displayName.value + " is not on BeeBuzz yet.");
            
            loading.value = false;
        }).catch(error => {
            loading.value = false;
            addContactErrorHandler(error, toast);
        });
    };
</script>
<template>
    <div class="container col center bg-overlay">
        <div 
            class="bg-white w-4/5 rounded-lg"
            sm="w-1/2"
            lg="w-1/3"
            xl="w-1/4">
            <DefaultHeader title="Add Contact" />
            <div class="flex items-center space-x-4 p-4">
                <img 
                    src="@/assets/images/avatar.png"
                    class="w-16 h-16 rounded-full" 
                    v-no-pointer />
                <div class="flex-1 col space-y-4 input-group">
                    <WidgetInput
                        id="firstName"
                        placeholder="First name"
                        :setValue="setValue"
                        :schema="string().required('First Name is required')"  />
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
                    class="flex center bg-emerald-500 text-white px-4 py-2 rounded-lg disabled:bg-stone-200 disabled:text-black"
                    @click="onSubmit">
                    <div 
                        v-if="loading"
                        class="w-6 h-6 border-3 border-white border-t-emerald-500 rounded-full animate-spin" />
                    <p v-else>Add Contact</p>
                </button>
            </div>
        </div>
    </div>
</template>