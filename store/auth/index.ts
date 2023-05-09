import FirebaseProvider from "~/utils/providers/firebaseProvider";

interface User {
    uid: string,
};

interface AuthState {
    user: User | null,
    firebaseProvider: FirebaseProvider,
};

export default defineStore("auth", {
    state: () => ({
        user: null,
        firebaseProvider: new FirebaseProvider(),
    }) as AuthState,
});