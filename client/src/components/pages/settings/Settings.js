import Footer from '../../footer/Footer'
import './settings.css'
import SingleSetting from './SingleSetting'
import{useContext, useState} from 'react'
import{Context} from '../../context/Context'
import { axiosInstance } from '../../../config'

function Settings() {
      const PF = 'https://exquisitartmedia.herokuapp.com/images/'
    const{user, dispatch} = useContext(Context)
      const [file, setFile] = useState(null);
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const[notification, setNotification] =useState(false)
      
    const postArticle = async (e) => {
     e.preventDefault();
     dispatch({type:"UPDATE_START"})
     const updatedUser = {
        userId:user._id,
        username,
        email,
        password
     };
     if(file){
         const data = new FormData();
         const filename = Date.now() + file.name;
         data.append("name", filename);
         data.append("file", file);
         updatedUser.profilePic = filename
         try{
        await axiosInstance.post('/api/upload', data)
         } catch(err){

         }
     }
     try{
     const res = await axiosInstance.put("/api/user/" + user._id, updatedUser);
      setNotification(true);
       dispatch({type:"UPDATE_SUCCESS", payload:res.data})
     } catch(err){
       dispatch({type:"UPDATE_FAILURE"})
     }
    }
    return (
        <>
        <div className="settingsPage">
           <div className="settingsLeft">
           <h4>Update your account here
          
           </h4>
           <form className="updateForm" onSubmit={ postArticle}>
           <div className="profileSettings">
               <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt=''  className="ppImage"/>
               <label htmlFor="fileInput">
                   <h6 >Change picture</h6>
               </label>
               <input type="file"
                id="fileInput"
                style={{display:"none"}} 
               onChange={e => setFile(e.target.files[0])}/>
           </div>
           <lable className="label">Name</lable>
           <input type="text"
            placeholder={user.username} 
            className="inputSettings"
            onChange={e => setUsername(e.target.value)}    
            />
           <lable className="label">Email</lable>
           <input type="email"
            placeholder={user.email}
             className="inputSettings"
            onChange={e => setEmail(e.target.value)}    
             />
           <lable className="label">Password</lable>
           <input type="password"
            placeholder="Enter password"  
            className="inputSettings"
            onChange={e => setPassword(e.target.value)}        
            />
           <button type="submit" className="settingPageBtn">Update</button>
         {notification && <p style={{color:"green", textAlign:"center", fontWeight:500}}>Conglatulations!You have updated your account successfully</p>}
           </form>
           </div>
           
           <SingleSetting/>
          
        </div>
        <Footer/>
        </>
    )
}

export default Settings
