import noteContext from "../../context/notes/noteContext";
import { useContext, useState } from "react";
export const MainPage = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNotes] = useState({ title: "", description: "", tags: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tags);
    setNotes({ title: " ", description: " ", tags: " " });
  };

  const onChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-3" >
        <form onSubmit={handleClick}>
          <h1>Add a Note</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
           Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={onChange}
              value={note.title}
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
              id="description"
              name="description"
              onChange={onChange}
              value={note.description}
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
              id="tags"
              name="tags"
              onChange={onChange}
              value={note.tags}
              minLength={5}
              required
            />
          </div>
          
          <button type="submit" 
          disabled={note.title.length<5||note.description.length<5||note.tags.length<5} 
           className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </>
  );
};
