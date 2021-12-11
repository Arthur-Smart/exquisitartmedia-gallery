import './article.css'
import {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from "react-router";
import { Context } from '../context/Context';
import { axiosInstance } from '../../config';


function Article() {
  const PF = 'https://exquisitartmedia.herokuapp.com/images/'
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [article, setArticle] = useState({})
  const{user} = useContext(Context)
   const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [updateMode, setUpdateMode] = useState(false)

  const updateArticle = async() =>{
       try{
await axiosInstance.put(`/api/article/${path}`, {
    username:user.username, 
    title, 
    desc}
);
setUpdateMode(false)
   }
   catch(err){

   }
  }

  const deleteArticle = async () =>{
   try{
await axiosInstance.delete(`/api/article/${path}`, {
    data:{username:user.username}
});
window.location.replace('/');
   }
   catch(err){

   }
  }

   useEffect(() =>{
   const getArticle = async () =>{
       const res = await axiosInstance.get('/api/article/' + path, {username:user?.username});
setArticle(res.data)
setTitle(res.data.title)
setDesc(res.data.desc)
   }
   getArticle();
   },[path])
    return (
        <div className="article">
           <div className="articleWrapper">
           {article.photo && 
            <img className="articleImg" src={PF + article.photo} alt=''/>
            }
              {updateMode ? <input type='text' value={title} className="articleHeadingInput" onChange={e => setTitle(e.target.value)}/> : 
              <h1 className="articleHeading">{article.title}</h1>}
               
               <div className="articleInfo">
               <div className="articleSpans">
                   <span className="articleWritter">
                    Writter:
                  
                   <b>{article.username}</b>
             
                   </span>
                   <span className="articleDate">{article.createdAt}</span>
                   </div>
                   {updateMode? (<textarea value={desc}  className="articleDescInput" onChange={e => setDesc(e.target.value)}/>) : ( <p className="articleDesc">
                      {article.desc}
                   </p>)
                 
                    }
                     <Link to={`/?user=${article.username}`} className="noLink">
                <button className="moreBtn">View {article.username} other articles</button>
                      </Link>
                    {updateMode &&
                    <button type="submit" className="updateBtn" onClick={updateArticle}>Update</button>
                     }
               </div>
              
               {article.username === user?.username && 
                <div className="edits">
                   <i className="far fa-edit" onClick={e => setUpdateMode(true)}></i>
                   <i className="far fa-trash-alt" onClick={deleteArticle}></i>
                    </div>
                   }
              
           </div>
        </div>
    )
    
}

export default Article

