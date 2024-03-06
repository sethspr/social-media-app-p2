import { useEffect, useState } from 'react'
import NewPost from './NewPost'
import NavBar from './NavBar'
import './App.css'
import PostList from './PostList'




function Home() {

  const [mediaPosts, setMediaPosts] = useState([])

  const [needComments, setNeedComments] = useState([])

  const [search, setSearch] = useState('')
  
  const filteredPosts = mediaPosts.filter((p) => {
    return p.name.toLowerCase().includes(search.toLowerCase()) ||  p.review.toLowerCase().includes(search.toLowerCase())
  })

  

  useEffect(()=> {
    fetch(`http://localhost:3000/posts/`)
    .then((r) => r.json())
    .then((d) => {
      setMediaPosts(d.reverse())
    })
  }, [])
 

  return (
    <div className='App'>
    <div className="nav-container">
      <NavBar search={search} setSearch={setSearch}/>
    </div>
    <NewPost posts={mediaPosts} setData={setMediaPosts}/>
    <PostList mediaPosts={filteredPosts} setData={setMediaPosts} needComments={needComments} setNeedComments={setNeedComments}/>
    </div>
  )
}

export default Home;