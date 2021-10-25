import React, { useState } from "react";
import '../Style/Blog.css'
import emptyHeart from '../Components/emptyHeart.png';
import fullHeart from '../Components/newFullHeart.png';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


const Blog = props => {
  const [liked, setLiked] = useState(false);
  const like = () => {
    setLiked(!liked);
  }



  return (
    <div className='Blog'>
      <h2> <Link to="/profile">{props.title}</Link></h2>
      <p>{props.content}</p>
      <p> <Link to="/profile">{props.author}</Link></p>
      <div className='likeBtn' onClick={() => {
        like()
      }}><img src={liked ? fullHeart : emptyHeart} height="75%" alt="empty heart" /></div>
    </div>

  )

}

export default Blog;