import articlestyles from "../styles/Article.module.css"
import ArticleItems from "./ArticleItems"

const ArticleList = ({articles}) => {
    
  return (
      <div className={articlestyles.grid}>
    {articles.map((article)=>(
            <ArticleItems key={article.id} article={article}/>
            

        ))
    }
    </div>
   
  )
}

export default ArticleList