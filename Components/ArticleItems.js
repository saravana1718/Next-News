import articlestyles from "../styles/Article.module.css"
import Link from "next/link"

const ArticleItems = ({article}) => {
    console.log(article)
  return (
    <Link href={`/article/${article.id}`}>
       <a className={articlestyles.card}>
           <h3>{article.id}</h3>
           <p>{article.body}</p>
       </a>
       
       </Link>
  )
}

export default ArticleItems