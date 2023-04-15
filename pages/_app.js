import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Script from "next/script"
import NoteState from '@/context/notes/NoteState';
import { Nav } from "@/Components/NavBar/Nav"
export default function App({ Component, pageProps }) {

  return (
  
    <>
    <NoteState>
    <Nav/>
  <Component {...pageProps} />
  <Script src="https://kit.fontawesome.com/a478dd592d.js" crossorigin="anonymous"/>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"/>
    </NoteState>
    </>
  
  )
}
