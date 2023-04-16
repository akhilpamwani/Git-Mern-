import React from 'react'
import axios from 'axios'

export const UploadFile = async(data) => {
  try {
    let response=await axios.post('http://localhost:5000/upload',data)
    return response.data;
} catch (error) {
    console.log(error);
  }
}
