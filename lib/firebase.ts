// Firebase configuration
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcLc930Io6l4BsuH2YnNt1Vq5vv7qCDbE",
  authDomain: "wander-41a8c.firebaseapp.com",
  projectId: "wander-41a8c",
  storageBucket: "wander-41a8c.firebasestorage.app",
  messagingSenderId: "503864072102",
  appId: "1:503864072102:web:dfb1b3d610a80c7cf9a167",
  measurementId: "G-W1KWJHNVWN"
}

console.log('Initializing Firebase with config:', firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig)

console.log('Firebase app initialized:', app)

// Initialize Firestore
export const db = getFirestore(app)

console.log('Firestore db initialized:', db)

export default app 