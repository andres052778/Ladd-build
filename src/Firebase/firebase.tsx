import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA-JTnGCbUj_l-ISt9FhsMt2xlCBlFYRlk",
    authDomain: "ladd-drafting-and-design.firebaseapp.com",
    projectId: "ladd-drafting-and-design",
    storageBucket: "ladd-drafting-and-design.appspot.com",
    messagingSenderId: "396014613252",
    appId: "1:396014613252:web:00fcb2545c2414567c1651",
    measurementId: "G-GQ1H5N3NEW"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();


export async function uploadFile(file:any, nameFile:string) {
    const storageRef = ref(storage, nameFile);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
}