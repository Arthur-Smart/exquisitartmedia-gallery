import Post from '../../post/Post';
import './articles.css'

function Articles({articles}){
    return(
        <div className="articles">
        {articles.map(a => (
            <Post article={a}/>
        ))}
        </div>
    )
}

export default Articles;