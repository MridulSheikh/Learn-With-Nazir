import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react";
import firebaseInitialize from "../firebase/firebase.init";
import axios from "axios"
import { Navigate, useLocation, useNavigate } from "react-router-dom";

firebaseInitialize();

function useFirebase() {
  const [user, setUser] = useState<object>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [suceess, setSuccess] = useState<string>();
  const [localUser, setLocalUser] = useState<object>()
  const [userLoading, setUserLoading] = useState<boolean>()

  const auth = getAuth();
  

  //registration with email and pass
  const registration = (email : string, password : string, name : string, gender : string) =>{
        setSuccess('')
        setError('')
        setUserLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const body = {
              name : name,
              email : user.email,
              gender : gender
            }
            axios.post('https://learn-with-nazir-server-run.onrender.com/api/v1/user',body)
            .then(res => {
              setSuccess(res.data.message)
              setUser({name: "nothing"})
            })
            .catch(error => {
             setError(error.response.data.message)
            })
        })
        .catch(err=>{
          const erroCode = err.code;
          if(err){
            if(erroCode == "auth/email-already-in-use"){
              setError("Email already use")
            }
          }
        })
        .finally(()=>setUserLoading(false))
  }

  //login with email and pass
  const singin = async (email : string, password : string)=>{
        setUserLoading(true)
        signInWithEmailAndPassword(auth ,email, password)
        .then(async (userCredential)=>{
          const user = userCredential.user;
          // @ts-ignore
         setLocalUser(user)
        })
        .catch(error=>{
          const errorCode = error.code;
          if(error){
            if(errorCode == "auth/wrong-password"){
              setError("Incorrect password")
            }
            else if(errorCode == "auth/user-not-found"){
              setError("Email not found")
            }
          }
        })
        .finally(()=>setUserLoading(false))
  }

  //logout 
  const logout =()=>{
    setUserLoading(true)
    signOut(auth).then(()=>{
      setUser({})
    })
    .finally(()=>setUserLoading(false))
  }
  //manage user
  useEffect(()=>{
    setUserLoading(true)
    onAuthStateChanged(auth, (user)=>{
      if(user){
        // @ts-ignore
        setLocalUser(user)
      }
    })
  },[])


  useEffect(()=>{
    setUserLoading(true)
    // @ts-ignore
    const url = `https://learn-with-nazir-server-run.onrender.com/api/v1/user/${localUser?.email}`
    axios.get(url)
    .then(
      res=>{
        setUser(res.data.body)
      }
    )
  .catch(error=>{
    //  setError(error.response.data.messgae)
  })
  .finally(()=>setUserLoading(false))
  // @ts-ignore
  },[localUser])

  return {
    setLoading,
    loading,
    error,
    setError,
    user,
    registration,
    singin,
    logout,
    suceess,
    setSuccess,
    userLoading,
    setUserLoading
  }
}

export default useFirebase