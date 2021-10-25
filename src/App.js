import React, { useState } from "react";
import Header from './Components/Header.js'
import Body from './Components/Body.js'
import Blog from './Components/Blog.js'
import Profile from './Components/Profile.js'
import '../src/Style/Screen.css'
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

//Testing github

function App() {
  const [tweetAuthor, setTweetAuthor] = useState("Decker");
  const [tweets, setTweets] = useState([]);
  const [tweetContent, setTweetConcent] = useState("");
  //const [tweetDate, setTweetDate] = useState("");
  const [tweetTitle, setTweetTitle] = useState("");





  return (
    <Router>
      <Switch>

        <Route path="/profile">
          <div>
            <p>this is a profile</p>
            <Profile user={tweetAuthor} />
            <Link to="/">Home Page</Link>
          </div>
        </Route>

        <Route exact path={{ pathname: `/${tweetAuthor}` }}>
          <div>
            <p>this jaunt worked</p>
            <Profile />
          </div>
        </Route>


        <Route path="/">
          <Link to={{ pathname: `/${tweetAuthor}` }} />


          <div className='screen'>
            <Link to="/profile">Profile Page</Link>

            <Header />
            <Body />
            <div className="background"></div>
            <input type="text" placeholder="Title" value={tweetTitle} onChange={e => setTweetTitle(e.target.value)} />
            <input type="text" placeholder="Author" value={tweetAuthor} onChange={e => setTweetAuthor(e.target.value)} />
            <input className='contentInput' type="text" placeholder="Content" value={tweetContent} onChange={e => setTweetConcent(e.target.value)} />

            <button
              onClick={() => {
                setTweetTitle("");
                setTweetAuthor("");
                setTweetConcent("");
                setTweets([...tweets, { title: tweetTitle, content: tweetContent, Author: tweetAuthor }])
              }


              }

            >Submit</button>

            <Blog title={"NY Trip"} content={"Some content"} author={"tweetAuthor"} date="the date" likes={0} retweets={5} />
            <Blog title={"California!"} content={"California was so fun"} author={"Decker"} date={"the date"} likes={44} retweets={22} />
            <div className="tweetsArray">
              {tweets.map(tweet => (
                <div>
                  <Blog title={tweet.title} author={tweet.Author} content={tweet.content} />
                </div>
              ))}


            </div>


          </div>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
