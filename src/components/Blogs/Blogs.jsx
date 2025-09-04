import { useEffect, useState } from "react";
import Blog from "../blog/blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookmarks}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('Blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="md:w-2/3 mx-auto">
      <h1 className="text-4xl mb-5">Blogs: {blogs.length}</h1>
      {
      blogs.map((blog)=><Blog 
      key={blog.id}
      blog={blog}
      handleAddToBookmarks={handleAddToBookmarks}
      ></Blog>)
      }
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func
}
export default Blogs;
