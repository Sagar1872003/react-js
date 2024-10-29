import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Add_todo, Delete_todo, View_todo } from '../Redux/Action/TodoAction';
import './Add.css'


const Add = () => {

    const [list,setList] = useState();

    const dispatch = useDispatch()
    const hendleSubmit =(e) =>{
        e.preventDefault();
        let obj ={
            list,
        }
        dispatch(Add_todo(obj));
        setList('')
    } 

    const AllTodos = useSelector(state => state.todo.TodoList)

    useEffect(()=>{
        dispatch(View_todo())
    },[])

    const handleDelete =( id) =>{

        dispatch(Delete_todo(id));
        alert("Your Note is Deleted...!")
    }

  return (
    <>
    <div className='mt-5 p-3'>
      <h2 className=''>Todo List</h2>
      <div className='mt-4'>
        <form className='d-flex' action="" onSubmit={hendleSubmit} >
            <input type="text" className='ps-2' placeholder='Add a Todo..' onChange={(e) => setList(e.target.value)} value={list || " "} />
            <button type="submit" className='btn'>submit</button>
        </form>
      </div>

      <div className='bg-info-subtle mt-4 p-4'>
         <ul className='p-0 m-0'>
           {
            AllTodos.map((item,index) => {
                return(
                    <li key={index} className='d-flex justify-content-between p-2'>
                    <h4 className='p-0 m-0  d-flex flex-start'>{item.list}</h4>
                <button className='btn' onClick={() => handleDelete(item.id)}>Remove</button>
                </li>
                )
            })
           }
         </ul>
      </div>
   
      
    </div>
    </>
  )
}

export default Add