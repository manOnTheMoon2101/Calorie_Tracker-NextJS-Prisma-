'use client'
import styles from '../page.module.css'
import AddPost from '../components/AddPost'
import PostList from '../components/PostList'
import CaloriePostList from '../components/CaloriePostList'
import NavBar from '../components/body/NavBar';
import Head from 'next/head'

async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", { cache: 'no-store' });
  
    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }
  
    return res.json();
  }

  
export default async function Calories() {
    const posts = await getData();
    

  return (
    <>
    <Head>

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet"/>
    </Head>
    <div>
    
        <div>
        <NavBar/>
            <h1>Calories</h1>
           
            <AddPost />
        </div>

        <CaloriePostList posts={posts} />
    </div>
    </>
  
  )
}
