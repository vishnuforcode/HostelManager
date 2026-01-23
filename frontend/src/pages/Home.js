import React, {  useState } from 'react'
import axios from 'axios'
import Post from '../components/Post'

function Home() {
  const [Posts , setPosts] = useState([])

const fetchData = async ()=>{
    const data =  await axios.get("http://localhost:8000/home")
    setPosts(data.data)
}

  return (
    <>
        <div className="container-fluid">
          <div className="container">
            hello
            <button onClick={fetchData}>Click to get post</button>

            <div className="row">
              
              {
                Posts.map((post)=> (
                    <Post key={post._id} data= {post}  />
                ))
              }
              
            </div>
            
          </div>
        </div>
    </>
  )
}

export default Home
