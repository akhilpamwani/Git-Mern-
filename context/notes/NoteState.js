import React,{useState} from 'react'
import noteContext from './noteContext';

const NoteState=(props)=>{
  const [notes, setnotes] = useState([])

// Get all Notes

const getNotes = async () => {
    // API Call 
 const response= await fetch("http://localhost:5000/api/notes/fetchallnotes", {
    method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMzEyZmY0Y2YyOTEyY2ExMTViODE0In0sImlhdCI6MTY4MTExMzk0M30.jCMJqUxfDyOsOI8xJKR6NTtHuaA4kbH1EJhM-SD8GGY"
      }
})
const json = await response.json();
setnotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tags) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`http://localhost:5000/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMzEyZmY0Y2YyOTEyY2ExMTViODE0In0sImlhdCI6MTY4MTExMzk0M30.jCMJqUxfDyOsOI8xJKR6NTtHuaA4kbH1EJhM-SD8GGY"
      },
      body: JSON.stringify({title, description,tags})
    });

    const note = await response.json();
   setnotes(notes.concat(note).concat(notes))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMzEyZmY0Y2YyOTEyY2ExMTViODE0In0sImlhdCI6MTY4MTExMzk0M30.jCMJqUxfDyOsOI8xJKR6NTtHuaA4kbH1EJhM-SD8GGY"
      }
    });
    const json = response.json(); 
    const newNotes = notes.filter((note) => { return note._id !== _id })
    setnotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tags) => {
    // API Call 
    const response = await fetch(`http://localhost:5000/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      },
      body: JSON.stringify({title, description, tags})
    });
    const json = await response.json(); 

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tags = tags; 
        break; 
      }
    }  
    setNotes(newNotes);
  }


return (
    <noteContext.Provider value={{ notes, getNotes,addNote,deleteNote }}>
      {props.children}
    </noteContext.Provider>
  )

}
 
  


export default NoteState