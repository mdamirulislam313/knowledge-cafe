import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  // const [count, setCount] = useState(0);
const [bookmarks,setBookmarks]=useState([])
const [readingTime, setRidingTime]=useState(0);

const handleAddToBookmarks = blog =>{
 const newBookmarks = [...bookmarks,blog];
 setBookmarks(newBookmarks);
}

const handleMarkAsRead = time=>{
 const newReadingTime= readingTime + time;
 setRidingTime(newReadingTime)
}

  return (
    <>
     <Header></Header>
     <div className="md:flex max-w-7xl mx-auto">
      <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  );
}

export default App;
