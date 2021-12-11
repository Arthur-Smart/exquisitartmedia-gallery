import Article from '../article/Article'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'
import './singlearticle.css'

function SingleArticle() {
    return (
        <>
        <div className="singleArticle">
        <Sidebar/>
          <Article/>
        </div>
        <Footer/>
        </>
    )
}

export default SingleArticle
