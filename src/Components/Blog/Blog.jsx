import PropTypes from 'prop-types'; // ES6
import {LiaBookmarkSolid} from 'react-icons/lia'
const Blog = ({blogs,handleBookmarks,handleReadBlog}) => {
    const {id,author,author_image,cover_image,hashtags,posted_date,reading_time,title} = blogs;
    
  return (
    <>
      
        <div className="blog-card mb-6 pb-6 border-b">
            <img className="w-fit" src={cover_image} alt="" />
            <div className='flex justify-between items-center my-8'>
            <div className='flex gap-3'>
                <img className='w-12' src={author_image} alt="" />
                <div>
                    <h2 className='text-lg font-semibold'>{author}</h2>
                    <p className='text-sm text-[#11111199]'>{posted_date}</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-[#11111199]'>{reading_time} min read</p>
                <button onClick={()=> handleBookmarks(blogs)} className='text-xl'><LiaBookmarkSolid/></button>
            </div>
            </div>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='my-4 text-[#11111199]'>
                {
                    hashtags.map((hash,idx) => <span className='mx-2' key={idx}><a href='#'>{hash}</a></span> )
                }
            </p>
           <p onClick={()=> handleReadBlog(id,reading_time)} className='text-[#6047EC] underline cursor-pointer'>Mark as read</p>

        </div>
     
    </>
  )
};
Blog.propTypes  = {
    blogs : PropTypes.object.isRequired,
    handleBookmarks : PropTypes.func,
    handleReadBlog : PropTypes.func

}

export default Blog
