import React from 'react'

export const NoteItem = (props) => {
   const {note}=props;
  return (
    <>
    <div className="col-md-3">
    <div className="card my-3" >
  
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <p className="card-text">{note.tags}</p>
    <i class="fa-solid fa-trash my-2 mx-2 cursor-pointer"></i>
    <i class="fa-solid fa-pen-nib my-2 mx-2 cursor-pointer"></i>
  </div>
</div>
    </div>
    </>
  )
}
