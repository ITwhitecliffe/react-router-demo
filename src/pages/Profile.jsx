import React from 'react'
import { useParams } from 'react-router-dom';
import content from '../data/content';

function Profile() {

    let {username} = useParams()
    const oneContent = content.filter(c => c.title === username);
    console.log(oneContent)
    
  return (
    <div>
        <h3>Portfolio of {username}</h3>
        <p>{oneContent[0].contents}</p>
        <img className='hero-picture' src={oneContent[0].image} alt='user profile'/> 
    </div>
  )
}

export default Profile