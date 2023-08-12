// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { Category } from "../../store/categories/categories.types";
import { 
    getAuth,
    signInWithPopup, 
    //signInWithRedirect, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver 
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    QueryDocumentSnapshot
} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
type FirebaseConfig = {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDGXzEzkHEAsddofz3maCtlL686685Re9w",
  authDomain: "crown-clothing-db-f20b2.firebaseapp.com",
  projectId: "crown-clothing-db-f20b2",
  storageBucket: "crown-clothing-db-f20b2.appspot.com",
  messagingSenderId: "243027113050",
  appId: "1:243027113050:web:b95571caa9e0659a175463"
};

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters ({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
//export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export type ObjectToAdd = {
    title: string;
} 

export const addCollectionAndDocuments = async <T extends ObjectToAdd> (collectionKey: string, objectsToAdd: T[]): Promise<void> => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    })

    await batch.commit();
    console.log('done')
}

// export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
//     const collectionRef = collection(db, 'categories');
//     const q = query(collectionRef);

//     const querySnapshot = await getDocs(q);
//     return  querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Category)
//     //     reduce((acc, docSnapshot) => {
//     //     const {title, items} = docSnapshot.data();
//     //     acc[title.toLowerCase()] = items;
//     //     return acc;
//     // }, {})

// }

export type AdditionalInformation = {
    displayName?: string;
}

export type UserData = {
    createdAt: Date;
    email: string;
    displayName: string;
}

export const createUserDocumentFromAuth = async (userAuth: User, additionalInformation?: AdditionalInformation): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('An Error occured', error)
        }
    }

    return userSnapShot as QueryDocumentSnapshot<UserData>;
}

export const createAuthUserFromEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth) 
            },
            reject
        )
    })
}