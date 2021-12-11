import './topbar.css'
import {Link} from 'react-router-dom'
import{useContext, useState} from 'react'
import { Context } from '../context/Context';

function Topbar(props) {
    const[open, setOpen] = useState(false)
     const PF = 'https://exquisitartmedia.herokuapp.com/images/'
    const {user, dispatch} = useContext(Context);
    const userLogout = () =>{
        dispatch({type: "LOGOUT"});
        setOpen(!open)
    }

    return (
        <>
        <div className="topBar">
           <div className="topBarWrapper">
               <div className="logo">
                <Link to='/' className="noLinklogo"><h1>EXQUISITART</h1></Link>
               </div>
               <div className="links">
                   <ul className="linkItems">
                    <Link to='/' className="noLink"><li className="link">Home</li></Link>
                     <Link to='/create'  className="noLink"><li className="link">Create</li></Link>
                     <Link to='/about' className="noLink" >  <li className="link">About</li></Link>
                     <li className="link" onClick={userLogout}>
                         {user && 'Logout'}
                     </li>
                     {!user &&
                     <Link to='/register'  className="noLink"><li className="link">Register</li></Link>
                     }
                   </ul>
               </div>
               {!open && (
<div className="mobileMenu" onClick={() => setOpen(!open)}>
                   <i class="fas fa-bars fa-2x"></i>
               </div>
               )}
               
             
               <div className="settings">
                 {user &&  <img className="ppIcon" src={PF + user.profilePic} alt=''/> } 
                  <Link to='/settings'  className="noLink"> <i class="fas fa-cog "></i></Link>
               </div>
           </div>
        </div>
          {/*Mobile Menu*/}
          {open && ( <div className="mobileLinks show">
               <div className="closeMobile" onClick={() => setOpen(!open)}>
                   <i class="far fa-times-circle fa-2x"></i>
               </div>
                <ul className="mobileItems">
                    <Link to='/' className="noLink"><li className="mobile" onClick={() => setOpen(!open)}>Home</li></Link>
                     <Link to='/create'  className="noLink"><li className="mobile" onClick={() => setOpen(!open)}>Create</li></Link>
                     <Link to='/about' className="noLink" >  <li className="mobile" onClick={() => setOpen(!open)}>About</li></Link>
                     <li className="mobile" onClick={userLogout} >
                         {user && 'Logout'}
                     </li>
                     {!user &&
                     <Link to='/register'  className="noLink" onClick={() => setOpen(!open)}><li className="mobile" >Register</li></Link>
                     }
                   </ul>
               </div>)}
              
                 {/*End of Mobile Menu*/}
        </>
    )
}

export default Topbar;
