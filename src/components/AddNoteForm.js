import React, { useState, useContext }  from 'react';
import NotesContext from '../context/notes-context'

const AddNoteForm = () => {
  const [title, setTitle] = useState('')
  const [body, setbody] = useState('')

  const { dispatch } = useContext(NotesContext)

  const addNote = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_NOTE', title, body })
    setTitle('')
    setbody('')
  } 

  return (<React.Fragment>
    <p>Add note</p>
    <form onSubmit={addNote}>
      <input value={title} onChange={(e)=> setTitle(e.target.value)} />
      <textarea value={body} onChange={(e)=> setbody(e.target.value)} />
      <button>
        Add Note
      </button>
    </form>
  </React.Fragment>)
}

export { AddNoteForm as default }
      