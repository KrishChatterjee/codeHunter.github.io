export default async function getAllBlogs() {
    let response=await fetch('http://localhost:3000/api/blogs',{ cache: 'no-store' })
    let data=await response.json();
    return data
  }