import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signInUser = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const signInWithGoogle = () => {
        setLoading(true);
       return signInWithPopup(auth ,  googleProvider)
    }


    useEffect(() => {
     const unsubscribe =  onAuthStateChanged(auth , currentUser => {
        console.log('Ovserving Current User' , currentUser);
            setUser(currentUser);
            setLoading(false);
           
        })
        return () => {
            unsubscribe();
        }
    } ,[])





    const authInfo = {user , loading , createUser , signInWithGoogle , signInUser , logOut  }

// signInWithGoogle


    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;