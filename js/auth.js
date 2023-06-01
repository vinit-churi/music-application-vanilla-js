import { app } from "./firebase.js";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

/**
 * Asynchronously logs in a user using Google OAuth2.
 *
 * @return {Object} An object containing the logged in user, if successful, or
 * an error message string, if unsuccessful.
 */
export async function loginUser() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        return { user, error: null };
    } catch (error) {
        console.log(error);
        return { user: null, error: "error while logging in" };
    }
}

/**
 * Logs out the current user.
 *
 * @return {Promise<boolean>} A promise that resolves to true if the user is successfully logged out, and false otherwise.
 */
export async function logoutUser() {
    try {
        let result = await signOut(auth);
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * Retrieves the current authenticated user and passes it to the callback function.
 *
 * @param {function} cb - A callback function that takes in the user object as a parameter.
 * @return {void} This function does not return anything.
 */
export function getUserAuthStatus(cb) {
    onAuthStateChanged(auth, (user) => cb(user));
}
