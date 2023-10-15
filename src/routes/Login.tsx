import { auth, googleProvider } from "../scripts/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../scripts/firebase";
import { Button, Typography } from "@mui/material";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userRef = doc(db, "Users", user.uid);
      await setDoc(userRef, {
        debts: {
          debt1: { amount: 0, name: "uAD4jBZlf1gHtxzJL3g5ctyIuNy2" },
          debt2: { amount: 0, name: "WbdAYUwkNFNk3pjdRQZDOV6A78p2" },
          debt3: { amount: 0, name: "yUjhdtDYF7QN81YmznPaPlaGmgn2" },
        },
      });

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Typography variant="h1">Login</Typography>

      <br />

      <Button onClick={signInWithGoogle} variant="contained"> Sign in with Google</Button>
    </>
  );
};
