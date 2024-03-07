import React, { useState } from 'react'
import './NewPost.css'

const NewPost = ({posts, setData}) => {

const [isShown, setIsShown] = useState(false)

const [name, setName] = useState("")
const [review, setReview] = useState("")
const [image, setImage] = useState("")


const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {name, review, image, likes: 0}

        fetch(`http://localhost:3000/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(newPost)
        })
        .then((r) => r.json())
        .then((d) => {
            setData([d, ...posts])
            setIsShown(false)
        })
        setName("")
        setReview("")
        setImage("")
    }

const handleShow = () => {
    setIsShown(!isShown)
}

    return (
        <div className="form-container">
            <button className='show' onClick={handleShow}>What would u like to share today</button>
            {isShown &&  <form className="form" onSubmit={handleSubmit}>
                <input type='text' name='Account holder' placeholder='Write Your Name...' className='input' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='text' name='image' placeholder='Provide Image ULR...' className='input' value={image} onChange={(e) => setImage(e.target.value)}/>
                <input type='text' name='Description' placeholder='Start with a comment...' className='review' value={review} onChange={(e) => setReview(e.target.value)}/>
                <button type="submit" className='submit-button'>Submit</button>
            </form>}
           
        </div>
    )
    
}

export default NewPost