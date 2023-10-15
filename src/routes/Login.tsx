import { auth, googleProvider } from "../scripts/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }

    }; return (
        <div>
            {/* <input 
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
            />
            <input placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}> Sign In</button> */}

            <button onClick={signInWithGoogle}> Sign in with Google</button>

            <button onClick={logout}> Logout </button>
        </div>
    );
};