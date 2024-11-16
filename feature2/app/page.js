'use client'

import { useState } from "react";

export default function Home() {
  const [errorMsg, setErrorMsg] = useState('');
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
  const handleUpload = (e)=>{
    if(errorMsg){
      e.preventDefault();
    }else{
      setErrorMsg('')
    }
  }
  return (
    <div className="flex flex-col gap-4 items-center w-[20rem]">
      <form>
      <input type='file' onChange={handleChange}/>
      <button className="bg-green-500 text-balck cursor-pointer px-4 py-2" onClick={handleUpload}>Upload</button>
      </form>
      <span className="text-white">{errorMsg}</span>
    </div>
  );
}
