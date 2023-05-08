import { FirebaseError } from "@firebase/util"
import { getAuth } from "firebase-admin/auth";

export default defineEventHandler(async (event) => {
    const uid: string = event.context.params!.uid;

    return getAuth().getUser(uid).then(user => {
        return {
            email: user.email,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            displayName: user.displayName,
        };
    }).catch((error: FirebaseError) => {
        let statusCode = 500;

        switch (error.code) {
            case "auth/user-not-found":
            case "auth/project-not-found":
                statusCode = 404;
                break;
        }

        throw createError({
            statusCode,
            statusMessage: error.message,
        });
    });
});