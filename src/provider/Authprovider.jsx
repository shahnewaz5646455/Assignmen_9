import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const Authcontext = createContext({});

export default function Authprovider({ children }) {
  const [email,setEmail]=useState(null);
  
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [mycart,setMycart]=useState([]);
 console.log(mycart);
  
  const googleLogin=(auth,provider)=>{
    setLoading(true);
    return signInWithPopup(auth,provider);
  }
  const updateUserProfile = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData).then(() => {
      // Manually update the user state after profile update
      setUser({ ...auth.currentUser, ...updatedData });
      setLoading(false);
    });
  };
  
  const login=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  
  const createUsers = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logout=()=>{
    return signOut(auth);
  }
  useEffect(() => {
    const unsuscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);

    })
    return () => {
      unsuscribe();
    };
  }, []);






  
 
  const authInfo = {
    user,
    createUsers,
    setUser,
    logout,
    login,
    googleLogin,
    loading,
    setLoading,
    updateUserProfile,
    setMycart,
    mycart,
    setEmail,
    email,
  };
  return <Authcontext value={authInfo}>{children}</Authcontext>;
}
