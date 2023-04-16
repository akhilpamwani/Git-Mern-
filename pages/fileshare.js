import React,{useRef,useState,useEffect} from 'react'
import {UploadFile} from '@/Components/fileUpload/UploadFile'
import Link from 'next/link'

 const fileshare = () => {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();



  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await UploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }
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
        
  </div>

  </div>


    </div>
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col"className='my-5'>Link</th>
      <th scope="col">Share It To Your Device</th>
  
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className='w-75'>{result}</th>
      <td className='w-20'>
      <button className="btn btn-primary btn-ap mb-3" >Share</button>
      </td>
      
    </tr>
   
  </tbody>
</table>
    </>
  )
}
export default fileshare