import React,{useRef,useState,useEffect} from 'react'
import {UploadFile} from '@/Components/fileUpload/UploadFile'
import Link from 'next/link'
 const fileshare = () => {
const fileInputRef=useRef()
const [file,setFile]=useState('')
const [result,setResult]=useState('')
const onUploadClick=()=>{
    fileInputRef.current.click()
}
useEffect(() => {
const getFile=async()=>{
if(file){
    const data=new FormData();
    data.append('name',file.name);
    data.append('file',file);
    await UploadFile(data);
    setResult(res.path);
}
}
getFile()
}, [file])
console.log(file);
  return (
    <>

  <div className="Card-Size">


    <div className="card-apy bg-card-body" >
  
  <div className="card-body">
    <h2 className="card-text mt-2">Share Your Files</h2>
    <p className="card-text">Share your files with your friends and family</p>
    <div className="card-text">
        <button className="btn btn-primary btn-ap mb-3" onClick={()=>{onUploadClick()}}>Upload</button>
        <input type="file" name="" 
         id="" ref={fileInputRef}
         className="d-none" 
         onChange={(e)=>{setFile(e.target.files[0])}}
         />
        </div>
        <div className="mt-2">
        <Link href={result} target="_blank" className="btn btn-primary btn-ap">Download File</Link>
</div>
  </div>

  </div>


    </div>
    
    
    </>
  )
}
export default fileshare