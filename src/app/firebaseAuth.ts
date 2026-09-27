import { getApp, getApps, initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

const readableAuthErrors: Record<string, string> = {
  "auth/email-already-in-use": "This email is already registered. Please log in.",
  "auth/invalid-credential": "Email or password is incorrect.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/invalid-email": "Enter a valid email address.",
  "auth/operation-not-allowed": "Enable this sign-in method in Firebase Authentication settings.",
  "auth/popup-closed-by-user": "The Google sign-in window was closed before completing.",
  "auth/popup-blocked": "Your browser blocked the Google sign-in window. Allow popups and try again.",
  "auth/unauthorized-domain": "Add this website domain to Firebase Authentication's authorized domains.",
};

export function getAuthError(error: unknown) {
  if (error && typeof error === "object" && "code" in error) {
    const code = String(error.code);
    return readableAuthErrors[code] || ("message" in error ? String(error.message) : "Authentication failed.");
  }
  return error instanceof Error ? error.message : "Authentication failed. Please try again.";
}

export async function registerWithEmail(name: string, email: string, password: string) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(credential.user, { displayName: name });
  return credential.user;
}

export async function loginWithEmail(email: string, password: string) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

export function observeAuthUser(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export function logoutUser() {
  return signOut(auth);
}
