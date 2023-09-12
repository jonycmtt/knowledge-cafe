import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarsk/Bookmarks";
import Header from "./Components/Header/Header";
// import PropTypes from 'prop-types'; // ES6

function App() {
  const [bookmarks,setBookmarks] =useState([]);
  const [readTime,setReadTime] =useState(0);

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleReadBlog = (id,time) => {
    // const newReadTime = readTime + time;
    // setReadTime(newReadTime)
    setReadTime(readTime+time);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)

  }
  return (
    <>
      <Header/>
     <div className="flex justify-between max-w-[80%] mx-auto gap-6 my-12">
        <Blogs handleBookmarks={handleBookmarks} handleReadBlog={handleReadBlog}/>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}/>
     </div>
    </>
  )
}
// App.propTypes  = {
//   handleBookmarks : PropTypes.object.isRequired
// }
export default App;
