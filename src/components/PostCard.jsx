import React, { useState } from 'react';
import './PostCard.css';
import NewComment from './NewComment';
import { Link } from "react-router-dom";

function PostCard({ id, name, review, likes, comments = [], image, profilePic }) {
  const [upLikes, setUpLikes] = useState(likes);
  const [isComment, setIsComment] = useState(false)
  const [showPost, setShowPost] = useState(true)
  const [displayComments, setDisplayComments] = useState(comments)


  
    
  function handleHide() {
    setShowPost(!showPost)
  }

  function addComment(newComment) {
    setDisplayComments([...displayComments, newComment]);
  }
   
  function showComment() {
    setIsComment(!isComment)
  }

  function handleLikes(smth) {
    const likes = smth ? upLikes + 1 : upLikes - 1;
    const body =  JSON.stringify({ likes });
    const req = { method: "PATCH", headers: { "Content-Type": "Application/json" }, body };

    fetch(`http://localhost:3000/posts/${id}`, req)
      .then((response) => response.json())
      .then((data) => setUpLikes(data.likes))
      .catch((error) => console.error('Error updating likes:', error));
  }

  const fallbackImage = "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
  const img = profilePic

    
    return (
        <div className="post-container">
          <div className="profile-header">
          <Link to={`/profile/${id}`}> <img className="profile-pic" src={profilePic ? img : fallbackImage } alt="Profile Image" /></Link>
            <h3>{name}</h3>
              <button className="hide-button" onClick={handleHide}>
                {showPost ? "Hide Post" : "Show Post"}
              </button>
          </div>
          {showPost && (
                <div className="post-header">
                    <img src={image} alt="Post Image" />
                    <p style={{ fontWeight: 'bold' }}>{review}</p>
                    <div className="like-button-container">
                        <button className="like-button" onClick={() => handleLikes(true)}>
                            {upLikes} 👍🏽
                        </button>
                        <button className="dislike-button" onClick={() => handleLikes(false)}>
                            👎🏽
                        </button>
                    </div>
                      
                    <button className="comment-button" onClick={showComment}> Comment: 💬 </button>
                    { isComment && (
                        <ul key={id} className="comment-section">
                            {displayComments.map((comment, index) => (
                                <p key={index} className="comment-bubble">{comment}</p>
                            ))}
                        </ul>
                    )}
                    
                    <NewComment comments={displayComments} setDisplayComments={setDisplayComments} id={id}/>
                   
                </div>
            )}
        </div>
    );
}

export default PostCard;