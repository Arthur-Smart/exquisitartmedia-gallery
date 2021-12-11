import './home.css'
import {useState, useEffect} from 'react'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'
import Post from '../../post/Post'
import Footer from '../../footer/Footer'
import Articles from '../Articles/Articles'
import {useLocation} from 'react-router'
import { axiosInstance } from '../../../config'

function Home() {
    const [articles, setArticles] = useState([]);
    const location = useLocation();
    const{search} = location;

    useEffect(()=> {
const fetchArticle = async () =>{
    const res = await axiosInstance.get('/api/article'+search);
    setArticles(res.data);
}
fetchArticle();
    },[search])
    return (
        <div className="home">
            <Header/>
            <div className="homeWrapper">
                <Sidebar/>
                <div className="posts">
                    <Articles articles={articles}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
