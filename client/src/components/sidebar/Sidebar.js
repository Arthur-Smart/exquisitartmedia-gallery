import './sidebar.css'
import {Link} from 'react-router-dom'
import{useRef, useState} from 'react'
import emailjs from 'emailjs-com';

function Sidebar() {
    const[send, setSend] =useState(false)
    const formRef = useRef();
    const handelSubmit = (e) =>{
        e.preventDefault();
          emailjs.sendForm('service_22ylj37',
           'template_tsu5zwg',
           formRef.current,
            'user_8eLFPZ1BSG0HcqCzNlNiD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setSend(true);
    }
    return (
        <div className="sidebar">
         <h4><span>Write</span> it here | create it here</h4>
         <div className="socialMedia">
             <div className="media">
                <i class="fas fa-edit"></i>
                 <Link to='/create' className="noLink">
                 <p>Create an article</p>
                 </Link>
             </div>
              <div className="media">
               <i class="fas fa-users"></i>
                <a href='https://web.facebook.com/arthur.ngige.1' target="_blank" className="noLink" rel="noreferrer">
                 <p>Friends</p></a>
             </div>
              <div className="media">
                <i class="fab fa-youtube"></i>
                 <p>Video</p>
             </div>
              <div className="media">
              <i class="fas fa-rss"></i>
                     <a href='https://web.facebook.com/arthur.ngige.1' target="_blank" className="noLink" rel="noreferrer">
                 <p>Feed</p></a>
             </div>
             <div className="media">
               <i class="fas fa-bookmark"></i>
                <a href='https://web.facebook.com/arthur.ngige.1' target="_blank" className="noLink" rel="noreferrer">
                 <p>Bookmark</p></a>
             </div>
             <div className="media">
                <i class="fab fa-stack-overflow"></i>
                <a href='https://stackoverflow.com/' target="_blank" className="noLink" rel="noreferrer">
                 <p>Stackoverflow</p></a>
             </div>
              <div className="media">
               <i class="fas fa-question-circle"></i>
                <a href='https://web.facebook.com/arthur.ngige.1' target="_blank" className="noLink" rel="noreferrer">
                 <p>Question</p></a>
             </div>
              <div className="media">
              <i class="fab fa-github"></i>
              <a href='https://github.com/Arthur-Smart' target="_blank" className="noLink" rel="noreferrer">
                 <p>Github</p></a>
             </div>
             
             <div className="media">
                <i class="fas fa-briefcase"></i>
                <a href='https://exquisitart.co.ke/' target="_blank" className="noLink" rel="noreferrer">
                 <p>Works</p>
                 </a>
             </div>
              <div className="media">
                <i class="fas fa-language"></i>
                 <a href='https://web.facebook.com/arthur.ngige.1' target="_blank" className="noLink" rel="noreferrer">
                 <p>Language</p></a>
             </div>
         </div>
         <div className="mylinks">
         <a href='https://web.facebook.com/Exquisite-services-100825231775219' target="_blank" className="noLink" rel="noreferrer">
             <i className="fab fa-facebook"></i></a>
  <a href='https://www.linkedin.com/in/arthur-mwangi-7a80761bb/' target="_blank" className="noLink" rel="noreferrer">
 <i class="fab fa-linkedin-in"></i></a>
   <a href='https://www.instagram.com/ngigearthur/' target="_blank" className="noLink" rel="noreferrer">
           <i class="fab fa-instagram-square"></i></a>
           <i class="fas fa-share-alt"></i>
         </div>
         <div className="comment">
             <h5>Leave a comment about our blog</h5>
              <form className="formGroup" ref={formRef} onSubmit={handelSubmit}>
                  <input type="email" placeholder="Enter email" name="user_email" required/>
                  <input type="text" placeholder="Write comment" name="user_subject" required/>
                  <button className="commentBtn" >Send</button>
                  {send && <p style={{color:"gray"}}>Thank you for your feedback</p>}
              </form>
         </div>
         <div className="media">
               <i class="fas fa-sign-out-alt"></i>
                 <p>Log out</p>
             </div>
        </div>
    )
}

export default Sidebar
