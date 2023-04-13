import React,{useContext} from 'react'
import noteContext from '../../context/notes/noteContext';
export const NoteItem = (props) => {
  const context=useContext(noteContext)
  const {deleteNote}=context;
   const {note}=props;

  return (
    <>
    <div className="col-md-3" key={note._id}>

    <div className="card my-3" >
  
  <div className="card-body">
  <p className="card-text">{note.title}</p>
    <p className="card-text">{note.description}</p>
    <p className="card-text">{note.tags}</p>
    <i className="fa-solid fa-trash my-2 mx-2 cursor-pointer" onClick={()=>{deleteNote(note._id)}}></i>
    <i className="fa-solid fa-pen-nib my-2 mx-2 cursor-pointer"></i>
  </div>
</div>
    </div>
    </>
  )
}
