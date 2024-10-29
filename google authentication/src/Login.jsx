import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { googleAuthProvider , auth } from '../Firebase';
import './Style.css'

const Login = () => {

    const navigate = useNavigate();

    const  handleSubmit = async () => {
        try{
            let data = await signInWithPopup(auth , googleAuthProvider);
            navigate('/Dashboard');
        }
        catch(err){
            console.log(err);
            return false;
        }
    }
  return (
    <div align="center">
        <h2>Login Page</h2>
        <div align="center">
            <h2>Sign in With Google in React</h2>
            <img src="./src/logo.png" style={{width:"200px"}} onClick={() => handleSubmit()} />
        </div>
    </div>
  )
}

export default Login