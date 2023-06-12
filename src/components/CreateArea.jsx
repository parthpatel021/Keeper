import React, { useState } from "react";
//Importing Ui-libraries
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    //create note object(with title & content field)
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    //creating variable to keep track of (is user clicked on textArea or not)
    const [isExpanded,setIsExpanded] = useState(false);

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
        //passing note-object to onAdd function in App.jsx component
        props.onAdd(note);
        //reseting inputs
        setNote({
            title: "",
            content: ""
        });

        //preventing button to refresh page (bacause of Form)
        event.preventDefault();
    }

    function expandArea(){
        setIsExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded &&
                    (<input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />)
                }
                <textarea
                    name="content"
                    onChange={handleChange}
                    onClick={expandArea}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded?"3":"1"}
                />
                {/* Adding Button and effect on button with the UI-libraries*/}
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
