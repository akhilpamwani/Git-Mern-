import { Nav } from "@/Components/NavBar/Nav"
import { MainPage } from "@/Components/Home/MainPage"
import Head from "next/head"
import Script from "next/script"
import NoteState from '@/context/notes/NoteState';
import Notes from '@/Components/Notes/Notes'

export default function Home() {
  return (
    <>
<NoteState>
    <Head>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous"/>
    </Head>

<Nav/>

  <MainPage/> 
  
<Script src="https://kit.fontawesome.com/a478dd592d.js" crossorigin="anonymous"/>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"/>
</NoteState>

 
     </>
     
     )
    
    }