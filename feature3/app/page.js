'use client'

import { useEffect, useState } from "react";

//This is the component for profile similarly only validated type of the profile.
export default function Home() {
  const [errorMsg, setErrorMsg] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleName = (e)=>{
    setName(e.target.value);
  }

  const handleBio = (e)=>{
    setBio(e.target.value);
  }
  const handleChange = (e)=>{
    if(e.target.files[0].type!=='image/jpeg' &&
      e.target.files[0].type!=='image/jpg' && e.target.files[0].type!=='image/png'){
      setErrorMsg("Error: choose jpg/png/jpeg files for image")
    }else{
      setErrorMsg('')
    }
    if(e.target.files[0].size>1000000){
      setErrorMsg("Error: size of image exceeds")
    }
  }

  const handleSubmit = (e)=>{
    if(errorMsg){
      e.preventDefault();
      
    }else{
      setErrorMsg('')
    }
  }
  return (<div className="w-full h-full flex flex-col items-center justify-center">
    <form className="flex flex-col gap-4 w-1/2">
      <span>name:</span>
      <input type="username" required onChange={handleName} value={name} className="text-black"/>
      <span>bio:</span>
      <input type="username" required onChange={handleBio} value={bio} className="text-black"/>
      <span>profile pic:</span>
      <input type="file" required onChange={handleChange}/>
      <button className="bg-green-500 text-black cursor-pointer px-4 py-2" onClick={handleSubmit}>Submit</button>
    </form>
    <span className="">{errorMsg}</span>

  </div>);
}
