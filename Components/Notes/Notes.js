import React,{useContext,useEffect,useRef,useState} from 'react'
import noteContext from '../../context/notes/noteContext';
import { NoteItem } from '../NoteItem/NoteItem'
import {useRouter} from 'next/router'
export const Notes = () => {
    const context=useContext(noteContext)
    const {notes,getNotes,editNotes}=context;
let history=useRouter()
    useEffect(() => {
      if (localStorage.getItem('token')) {
        
        getNotes()
      }else{
history.push('/login')
      }
  
    },[])
    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNotes] = useState({ id:"",etitle: "", edescription: "", etags: "" });

    const updateNote=(currentChange)=>{
    ref.current.click()

    setNotes({id:currentChange._id, etitle:currentChange.title,edescription:currentChange.description,etags:currentChange.tags})
    }
  const handleClick = (e) => {
    refClose.current.click()
    editNotes(note.id,note.etitle,note.edescription,note.etags)
    e.preventDefault();
    
  };

  const onChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };
    

  return (
    <>

<button type="button" className="btn btn-primary d-none"ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={handleClick} className="modal-body">
      <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
           Title
            </label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              name="etitle"
              value={note.etitle}
              onChange={onChange}
              minLength={5}
              required
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="edescription"
              name="edescription"
              value={note.edescription}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="etags"
              name="etags"
              value={note.etags}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          
         
      </form>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" disabled={note.etitle.length<5||note.edescription.length<5||note.etags.length<5}  >Save changes</button>
      </div>
    </div>
  </div>
</div>
    <div className="row my-3 mx-5">
    <h1>Your Notes</h1>
    <div className="container mx-2">

    
    {notes.length==0 && 'No Notes to display'}
    </div>
    {notes.map(
        (note)=>{
        return <NoteItem key={note._id} updateNote={updateNote} note={note}/>
    })}
    </div>
    </>
  )
}
