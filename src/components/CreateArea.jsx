import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Collapse } from "@material-ui/core";
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [clickState, setClickState] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleClick() {
    setClickState(true);
  }

  return (
   
      <div>
        <form className="create-note">
       
          <input
            hidden={clickState?false : true}
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />

          <textarea
            name="content"
            onClick={handleClick}
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={clickState? "3":"1"}
          />

          <Zoom  in={clickState}> 
            <Fab 
            name="fab" onClick={submitNote}>
            <AddIcon />
          </Fab>
          </Zoom>
        
        </form>
      </div>
     
  );
}

export default CreateArea;
