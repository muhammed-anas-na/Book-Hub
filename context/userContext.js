"use client"
import React, { createContext, useEffect, useState } from 'react';
import { checkIfLoggedIn_Fn } from '../Axios/methods/POST';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    async function checkIfLoggedIn(){
        try{
            const {data} = await checkIfLoggedIn_Fn();
            setUser({...data});
        }catch(err){
            console.log("Not logged in");
        }
    }
    checkIfLoggedIn()
},[])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};