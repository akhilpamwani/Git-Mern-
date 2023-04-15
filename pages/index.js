import { Nav } from "@/Components/NavBar/Nav"
import { MainPage } from "@/Components/Home/MainPage"
import Head from "next/head"
import Script from "next/script"
import NoteState from '@/context/notes/NoteState';
import {Notes} from '@/Components/Notes/Notes'

export default function Home() {
 
  return (

    <>
<NoteState>
    <Head>
   
    </Head>



  <MainPage/> 
  <Notes/>
  

</NoteState>

 
     </>
     
     )
    
    }