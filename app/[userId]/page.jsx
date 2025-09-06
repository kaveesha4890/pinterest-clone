"use client"
import React,{useState, useEffect} from 'react'
import { getFirestore } from 'firebase/firestore'
import app from '../Shared/firebaseConfig'
import { doc, getDoc } from "firebase/firestore";
import UserInfo from './../components/UserInfo'

export default function Profile({params}) {
    const db=getFirestore(app);
    const [userInfo, setUserInfo] = useState();
    useEffect(()=>{
        console.log(params.userId.replace('%40','@'));
        if(params){
            getUserInfo(params.userId.replace('%40','@'))
        }
    })

    const getUserInfo=async(email)=>{
        const docRef = doc(db, "user", email);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            setUserInfo(docSnap.data())
        }else{
            console.log("No such docuement!");
        }
    }
  return (
    <div>
        {userInfo?
        <UserInfo userInfo={userInfo}/> : null}
    </div>
  )
}
