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
        "auth-token": localStorage.getItem('token')
      }
})
const json = await response.json();
setnotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tags) => {
    // TODO: API Call
    // API Call 
    try {
      let data={title:title,description:description,tags:tags};

      const response = await fetch(`http://localhost:5000/api/notes/addnotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify(data)
      });
  
      const note = await response.json();
      let fetch_notes = [].concat(notes, note.data);
      // console.log(newArray);
//  console.log(notes);
      setnotes(fetch_notes)
    } catch (error) {
      console.log(error);
    }
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`http://localhost:5000/api/notes/deletenotes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    const newNotes = notes.filter((note) => { return note._id !== id })
    setnotes(newNotes)
  }

  // Edit a Note
  const editNotes = async (id, title, description, tags) => {
    try {
    // API Call 
    let data={title:title,description:description,tags:tags};
    const response = await fetch(`http://localhost:5000/api/notes/updatenotes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify(data)
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
    setnotes(newNotes);
  } catch (error) {
    console.log(error);
  }
  }


return (
    <noteContext.Provider value={{ notes, getNotes,addNote,deleteNote,editNotes }}>
      {props.children}
    </noteContext.Provider>
  )

}
 
  


export default NoteState