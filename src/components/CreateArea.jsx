import React, { useState } from "react";

function CreateArea(props) {
  const [currNote, setCurrNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setCurrNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={currNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={currNote.content}
        />
        <button
          onClick={(event) => {
            props.onAdd(currNote);
            setCurrNote({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
