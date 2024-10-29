import React, { useState } from 'react'
import { getDatabase,set,ref } from 'firebase/database';
import './Add.css';
import { app } from '../Firebase';


const Add = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [emailid, setEmailId] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

       const db = getDatabase(app);
       let id = Math.floor(Math.random() * 10000);

       set(ref(db,`users/${id}`),{
        name: name,
        company: company,
        emailid: emailid,
        phone: phone,
        message: message
       })

        alert("Your Record is Added....!");
        setName("");
        setCompany("");
        setEmailId("");
        setPhone("");
        setMessage("")
    }
    return (
        <div align="center">
        <h2>Firebase Realtime Database - Contact Page</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} 
                    required 
                />
            </div>
    
            <div className="form-group">
                <label htmlFor="company">Company: </label>
                <input 
                    type="text" 
                    id="company" 
                    onChange={(e) => setCompany(e.target.value)} 
                    value={company} 
                    required 
                />
            </div>
    
            <div className="form-group">
                <label htmlFor="email">Email ID: </label>
                <input 
                    type="email" 
                    id="email" 
                    onChange={(e) => setEmailId(e.target.value)} 
                    value={emailid} 
                    required 
                />
            </div>
    
            <div className="form-group">
                <label htmlFor="phone">Phone: </label>
                <input 
                    type="tel" 
                    id="phone" 
                    onChange={(e) => setPhone(e.target.value)} 
                    value={phone} 
                    required 
                />
            </div>
    
            <div className="form-group">
                <label htmlFor="message">Message: </label>
                <textarea 
                    id="message" 
                    onChange={(e) => setMessage(e.target.value)} 
                    value={message} 
                    required 
                ></textarea>
            </div>
    
            <br />
    
            <input type="submit" value="Submit" />
        </form>
    </div>
    
    )
}

export default Add