import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUser } from '../action/crud';
import { MdDelete } from "react-icons/md";
import "./view.css"


const View = () => {
    const users = useSelector(state => state.crud.users);
    const dispatch = useDispatch();

    const deleteUser = (id) => {
        dispatch(DeleteUser(id));
        alert("Record delete...");
    }

    return (
        <div className="container">
            <div className="row">
                {
                    users.map((u) => {
                        return (
                            <div key={u.id}>
                                <div className="card-body" >
                                    <h5 >{u.title}</h5>
                                    <p>{u.note}</p>
                                    <button className='vie' onClick={() => deleteUser(u.id)}><MdDelete /></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default View;