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

<Nav/>

  <MainPage/> 
  <Notes/>
  
<Script src="https://kit.fontawesome.com/a478dd592d.js" crossorigin="anonymous"/>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"/>
</NoteState>

 
     </>
     
     )
    
    }