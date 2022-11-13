import React from 'react'

function Blog(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.contents}</p>
        <img className='profile-picture' src={props.image} alt='cat'/>
    </div>
  )
}

export default Blog