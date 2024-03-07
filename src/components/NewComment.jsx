import React, { useState } from 'react'
import './NewComment.css'

const NewComment = ({comments, setDisplayComments, id}) => {

    const [comment, setComment] = useState("")
    
    const submitClicked = (e) => {
      e.preventDefault();

      const updated_comments = [...comments, comment];
      const body =  JSON.stringify({ comments: updated_comments });
      const req = { method: "PATCH", headers: { "Content-Type": "Application/json" }, body };
      // POST didn't work > endpoint wasn't set in: node_modules > json-server > lib > app.js.
      // only had app.post('/:name') on line 50. 
      // line 70 had PATCH > app.patch('/:name/:id') to designate pathway to http://localhost:3000/posts/${id}
      
      fetch(`http://localhost:3000/posts/${id}`, req)
        .then((response) => response.json())
        .then((data) => setDisplayComments(data.comments))
        .catch(e => setDisplayComments(comments));

        setComment("")
    }
    
  return (
    <div className='new-comment'>
      <form onSubmit={submitClicked} >
        <input type="text"  placeholder='Post a reply' name='comments' className='comment-box' value={comment} onChange={(e) => setComment(e.target.value)}/>
        <button className="submit-comment">Submit</button>
      </form>
    </div>
  )
}

export default NewComment