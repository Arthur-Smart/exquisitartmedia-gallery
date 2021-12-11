import './register.css'
import {useState} from 'react'
import{Link} from 'react-router-dom'
import { axiosInstance } from '../../../config';

function Register() {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error, setError] = useState(false)

    const registerUser = async (e) =>{
        e.preventDefault();
        setError(false);
        try{
         
        const res = await axiosInstance.post('/api/auth/register', {
            username,
            email,
            password
        })
       res.data && window.location.replace('/login')
        } catch(err){
        setError(true)
        }
    }
    return (
        <div className="register">
            <div className="registerFields">
                <h3><span>Register </span> an account to proceed</h3>
                <form className="registerForm" onSubmit={registerUser}>
                    <input type="text" 
                    placeholder="Enter name eg.Joshua maina" 
                    onChange={e => setUsername(e.target.value)}
                    required
                    />
                    <input type="email"
                     placeholder="Enter email eg.joshuamaina@gmail.com" 
                      onChange={(e) => setEmail(e.target.value)}
                     SingleArticle/>
                    <input type="password" placeholder="Enter password"
                     onChange={(e) => setPassword(e.target.value)}
                     SingleArticle/>
                    <button className="formRegisterBtn" type="submit">Register</button>
                </form>
                <p>Login if you already have an account</p>
                <Link to="/login"> <button className="formLoginBtn" type="submit">Login</button></Link>
                 {error && <p>The username Exists</p>}
            </div>
        </div>
    )
}

export default Register
