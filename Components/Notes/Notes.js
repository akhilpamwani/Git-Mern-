import React,{useContext,useEffect,useRef,} from 'react'
import noteContext from '../../context/notes/noteContext';
import { NoteItem } from '../NoteItem/NoteItem'

export const Notes = () => {
    const context=useContext(noteContext)
    const {notes,getNotes}=context;
    
    
    useEffect(() => {
 
    getNotes()
  
    },[])

// const updatenote=()=>{
// ref.toggle()
// }
// const ref = useRef(null);
  return (
    <>
  {/* <div class="modal" ref={ref} tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
    <div className="row my-3 mx-5">
    <h1>Your Notes</h1>
    {notes.map(
        (note)=>{
        return <NoteItem  note={note}/>
    })}
    </div>
    </>
  )
}
