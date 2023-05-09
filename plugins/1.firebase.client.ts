import { initializeApp } from "firebase-admin";

export default defineNuxtPlugin(() => {
    initializeApp( {
        apiKey: "AIzaSyC7Gx8qwb58L412kdz4I6jLfc7YMKIrkRs",
        authDomain: "beehivemee.firebaseapp.com",
        projectId: "beehivemee",
        storageBucket: "beehivemee.appspot.com",
        messagingSenderId: "368549567557",
        appId: "1:368549567557:web:8a2656097f50a94a0f572c",
        measurementId: "G-STYBHV5EYJ"
    });
});