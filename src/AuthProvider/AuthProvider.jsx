import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState([]);
    const [loading,setLoading]= useState(true);

// user create 
const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
// user login 
const signInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}
//update user
const updateUser = (name,photo)=>{
    console.log(name,photo)
    return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
}
// user signOut 
const userSignOut = ()=>{
    setLoading(true)
    return signOut(auth)
}
// observation user
 useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        console.log(currentUser)
        setLoading(false)
    });
    return ()=>{
        return unsubscribe();
    }
 },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        userSignOut,
        updateUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;