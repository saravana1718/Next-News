import {server} from "../confiq/index"
import Head from 'next/head'
import ArticleList from '../Components/ArticleList'


export default function Home({articles}) {
  console.log(articles)
  return (
    <div >
      <Head>
        <title>WEB dev newz</title>
        <meta name='keywords' content='webdevelopment'/>

      </Head>
      
      <ArticleList articles={articles}/>
     
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
