import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddUser } from '../action/crud'
import { FaPlus } from "react-icons/fa";
import "./add.css"



const Add = () => {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !note) {
      alert("All fields are required.");
      return false;
    }

    let obj = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      note: note
    }
    dispatch(AddUser(obj));
    setTitle("");
    setNote("");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="name">
              <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div className='dec'>
              <input type="text" placeholder='Write a note' onChange={(e) => setNote(e.target.value)} value={note} />
            </div>
            <button className='sub' type='submit' ><FaPlus /></button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Add;