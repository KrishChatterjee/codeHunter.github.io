
import getAllBlogs from '@/functions/getAllBlogs';
import styles from './page.module.css'


export default async function Slug({ params }) {

  const getBlogdata=async() => {
    let response=await fetch(`http://localhost:3000/api/getblogs?slug=${params.slug}`,{ cache: 'no-store' })
    let data=await response.json();
    return data
  }

  let blog=await getBlogdata()

  

  return <div className={styles.container}>
    <main className={styles.main}>
    <h1>{blog.title}</h1>
    <hr />
    <div>
      {blog.content}
    </div>
    </main>
  </div>
}

 export async function getStaticParams(){
  
  let allBlogs= await getAllBlogs();
  return allBlogs.map(blog=>({
    slug:blog.slug
  })) 
  
  
 }