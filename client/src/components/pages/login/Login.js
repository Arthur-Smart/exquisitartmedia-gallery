import './login.css'
import {Link} from 'react-router-dom'
import {useRef, useContext} from 'react'
import { Context } from '../../context/Context';
import { axiosInstance } from '../../../config';

function Login() {
    const userRef = useRef();
    const passwordRef = useRef(); 
    const{ dispatch, isFetching} = useContext(Context);
    const handleLogin = async (e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
        const res = await axiosInstance.post('/api/auth/login', {
        username:userRef.current.value,
        password:passwordRef.current.value
    })
    dispatch({type:"LOGIN_SUCCESS", payload:res.data})
    } catch(err){
    dispatch({type:"LOGIC_FAILURE"});
    }
    };
   
    return (
        <div className="login">
           <div className="loginFields">
                <h3><span>Login </span> to your account</h3>
                <form className="loginForm" onSubmit={handleLogin}>
                    <input type="text" 
                    placeholder="Enter username eg.Joshua maina"
                    ref={userRef} 
                    required/>
                    <input type="password"
                     placeholder="Enter password"
                        ref={passwordRef} 
                      required/>
                    <button className="formLoginBtn2" type="submit" disabled={isFetching}>Login</button>
                </form>
                <p>Register to create an account</p>
              <Link to='/register'> <button className="formRegisterBtn2" type="submit">Register</button></Link> 
            </div>
        </div>
    )
}

export default Login
