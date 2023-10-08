import React from 'react'
import styles from '../app/page.module.css'
import Link from 'next/link'
import getAllBlogs from '@/functions/getAllBlogs'



const Blog = async() => {
  
  
  let blogs=await getAllBlogs()

  return (
    <div className={styles.blogs}>
      <h2>Latest Blogs</h2>
      {
      blogs.map((item)=>(
        <div key={item.slug}className={styles.blogItems}>
        <Link href={`/blogpost/${item.slug}`}>
          <h3>{item.title}</h3>
        </Link>
        <p> {item.content.substr(0,100)} ... </p> 
      </div>
      ))
      }
    </div>
  )
}

export default Blog