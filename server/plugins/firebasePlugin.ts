import admin  from "firebase-admin";

import serviceAccount from "~/serviceAccountKey.json";

export default defineNitroPlugin(() => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
});