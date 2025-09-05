import PropTypes from 'prop-types';
import { IoIosBookmarks } from "react-icons/io";
const Blog =({blog ,handleAddToBookmarks,handleMarkAsRead})=> {
    const {id,title, cover,author,img,reading_time, posted,hashtags} = blog;
  return (
    <div className='mb-20 space-y-4'>
        <img className='w-full mb-8' src={cover} alt={ `cover picture of the title ${title}`} />
        <div className="flex justify-between mb-4 ">
            <div className='flex'>
                <img className='w-14 rounded-full' src={img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} min read</span>
                <button
                onClick={()=>handleAddToBookmarks(blog)}
                 className='ml-2 text-2xl text-red-400'><IoIosBookmarks></IoIosBookmarks></button>
            </div>
        </div>
        <h2 className="text-4xl">{title}</h2>
        <p>{
            hashtags.map((hash,idx)=><span key={idx}><a href="">{hash}</a></span>)    
        }</p>
        <button
        onClick={()=>handleMarkAsRead(id,reading_time)}
         className='text-purple-600 font-bold underline'
        >Mark As Read</button>
    </div>
  )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog