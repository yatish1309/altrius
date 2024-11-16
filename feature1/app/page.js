'use client'

import { useState } from "react";

//Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
const regexForPass = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

// This function for user Registration I only validated password here due to time constraint using above regex code. Could also add validation for Email like .com, for username to have letters and numbers only.
export default function Home() {
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [username,setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handlePass = (e)=>{
    setPass(e.target.value);
  }
  const handleUsername = (e)=>{
    setUsername(e.target.value);
  }
  const handleSubmit = (e)=>{
    console.log("!@#$",pass, pass.match(regexForPass))
    if(!pass.match(regexForPass)){
      setErrorMsg(" Error:  Password must have Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
      e.preventDefault();
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <form className="flex flex-col gap-4 w-1/2">
        <span>Email:</span>
        <input type="email" required value={email} onChange={handleEmail} className="text-black"/>
        <span>Password:</span>
        <input type="password" required onChange={handlePass} value={pass} className="text-black"/>
        <span>Username:</span>
        <input type="username" required onChange={handleUsername} value={username} className="text-black"/>
        <button className="bg-green-500 text-black cursor-pointer px-4 py-2" onClick={handleSubmit}>Submit</button>
      </form>
      <span className="">{errorMsg}</span>

    </div>
  );
}
