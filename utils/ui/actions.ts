import { Action } from "~/components/WidgetAction.vue";

        
function intent(action: Action){
    const router = useRouter();
    router.push(action.path);
}

export const attachmentActions = [
    {
        icon: "i-mdi-image-outline",
        label: "Photo or Video",
    },
    {
        icon: "i-mdi-file-outline",
        label: "Document",
    },
    {
        icon: "i-mdi-gift-outline",
        label: "Send Payment",
    },
] as Action[];

export const chatMenuActions = [
    {
        icon: "i-mdi-bell-off-outline",
        label: "Mute",
    },
    {
        icon: "i-mdi-phone-outline",
        label: "Call",
    },
    {
        icon: "i-mdi-video-outline",
        label: "Video Call",
    },
    {
        icon: "i-mdi-check-circle-outline",
        label: "Select Messages",
    },
    {
        icon: "i-mdi-delete-outline",
        class: "text-red-500",
        label: "Delete Group",
    },
] as Action[];


export const defaultMenuActions = [
    {
        icon: "i-mdi-bookmark-outline",
        label: "Saved Messages",
    },
    {
        icon: "i-mdi-account-outline",
        label: "Contacts",
    },
    {
        icon: "i-mdi-settings-outline",
        label: "Settings",
    },
    {
        icon: "i-mdi-help-circle-outline",
        label: "BeeBuzz Features",
    },
    {
        icon: "i-mdi-bug-outline",
        label: "Report Bug",
    },
] as Action[];

export const defaultFabActions = [
    {
        icon: "i-mdi-record",
        label: "New Channel",
        path: "/inbox/channels/create/",
        onClick: intent,
    },
    {
        icon: "i-mdi-account-multiple-outline",
        label: "New Group",
        path: "/inbox/groups/create/",
        onClick: intent,
    },
    {
        icon: "i-mdi-account-outline",
        label: "New Private Chat",
        path: "/inbox/contacts/",
        onClick: intent,
    },
] as Action[];