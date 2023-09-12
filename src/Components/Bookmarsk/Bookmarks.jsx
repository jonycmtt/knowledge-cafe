import PropTypes from 'prop-types'; // ES6
const Bookmarks = ({bookmarks,readTime}) => {
  // console.log(bookmarks,)
  // const {title} = bookmarks;
  return (
    <>
    <div className="md:w-1/3">
      <div className='border border-[#6047EC] p-5 font-semibold text-[#6047EC] bg-[#6047EC1A] rounded-lg'>
       <h3>Spent time on read : {readTime} min</h3>
      </div>
        <div className='bg-[#1111110D] p-5 my-5'>
          <h2 className='text-lg font-semibold mb-4'>Bookmarked Blogs : {bookmarks.length}</h2>
          <ul>
            {
              bookmarks.map((bookmark,idx) => <li className='p-5 my-4 bg-white rounded-lg' key={idx}>{bookmark.title.length > 0 && bookmark.title.slice(0,80)}...</li>)
            }
          </ul>
        </div>
    </div>
    </>
  )
}
Bookmarks.propTypes  = {
  bookmarks : PropTypes.array.isRequired,
  readTime : PropTypes.number.isRequired,
}


export default Bookmarks
