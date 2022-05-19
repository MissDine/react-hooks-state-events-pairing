import Comments from "./Comments";
import { useState } from "react";

function SongInfo({title, views, createdAt, upvotes, downvotes, comments}){
  const [hide, sethide] = useState(false)
  const classshow = hide ? "none" : "block"
  function handleComments(){
    sethide(!hide)
  }

  const comment = comments.map((com) => (
    <Comments 
      user = {com.user}
      id = {com.id}
      commentTo = {com.comment}
      classs = {classshow}
    />
  ))

  const [toUpvote, settoUpvote] = useState(views)
  const [toDown, settoDown] = useState(downvotes)
  function handleUpVotes(){
    settoUpvote(toUpvote => toUpvote + 1)
  }

  function handleDownvotes(){
    settoDown(toDown => toDown + 1)
  }
  
  return (
    <>
      <h2>{title}</h2>
      <div className="info">
        <span>{views} views | premierd {createdAt}</span>
        <span className="btn" onClick={ handleDownvotes }>&#x1F44E; { toDown }</span>
        <span className="btn" onClick={ handleUpVotes }>&#x1F44D; { toUpvote }</span>
      </div>
      <hr />
      <button onClick={ handleComments }>{hide ? "Show Comments" : "Hide Comments"}</button>
      <>
        {comment}
      </>
    </>
  )
}

export default SongInfo;