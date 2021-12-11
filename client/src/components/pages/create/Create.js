import Footer from '../../footer/Footer'
import './create.css'
import{useState, useContext} from 'react'
import{Context} from '../../context/Context'
import { axiosInstance } from '../../../config'

function Create() {
    const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
    const {user} = useContext(Context);   

    const postArticle = async (e) => {
     e.preventDefault();
     const newArticle = {
         username:user.username,
         title,
         desc,
     };
     if(file){
         const data = new FormData();
         const filename = Date.now() + file.name;
         data.append("name", filename);
         data.append("file", file);
         newArticle.photo = filename
         try{
        await axiosInstance.post('/api/upload', data)
         } catch(err){

         }
     }
     try{
     const res = await axiosInstance.post('/api/article', newArticle);
    window.location.replace('/article/' + res.data._id);
     } catch(err){

     }
    }
    return (
        <div className="create">
        {file && 
         <img src={URL.createObjectURL(file)} alt="" className="createImg"/>
        }
       
            <form className="createArticle" onSubmit={postArticle}>
                <div className="createFormGroup">
                <label htmlFor="fileInput" className="addPhoto">
                    <i className="createIcon fas fa-plus"></i> <p>Click icon to Add a photo</p>
                </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={e => setFile(e.target.files[0])}/>
                    <input type="text"
                     placeholder="Writer your title" 
                     className="createInput"
                     onChange= {e => setTitle(e.target.value)}
                      autoFocus={true}/>
                </div>
                <div className="createTextarea">
                    <textarea placeholder="Write your Article..." onChange={e => setDesc(e.target.value)}></textarea>
                    
                </div>
                <button className="createBtn" type="submit">Post</button>
            </form>
            <Footer/>
        </div>
    )
}

export default Create
