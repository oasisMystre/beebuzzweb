export default defineNuxtRouteMiddleware(() => {
    const { useAuthStore } = useStore();
    const authStore = useAuthStore();

    if (!authStore.user)
        navigateTo("/auth/");
});