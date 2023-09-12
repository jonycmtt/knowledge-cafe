import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6

const Blogs = ({handleBookmarks,handleReadBlog}) => {
  const [blogs,setBlogs] = useState([])

  useEffect(()=> {
    fetch('index.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <>
        <div className="md:w-2/3">
          {
            blogs.map(blogs => <Blog
              key={blogs.id}
              blogs={blogs}
              handleBookmarks={handleBookmarks}
              handleReadBlog ={handleReadBlog}
              />)
          }
        </div>
    </>
  )
}
Blogs.propTypes  = {
  handleBookmarks : PropTypes.func,
  handleReadBlog : PropTypes.func
}
export default Blogs;
