import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import BlogList from '../components/BlogList'

function Home() {
  const [input, setInput] = useState('')
  const [name, setName] = useState('')
  // const greeting = 'Someone out there'

  const greeting = (event) => {
    // const newName = event.target.value
    setInput(event.target.value)
  }

  const changeName = (e) => {
      e.preventDefault()
    setName(input)
  }

  let navigate = useNavigate()

  const userProfile = () => {
    navigate(`/profile/${name}`)
  }

  return (
    <div className='Home'>
            <h1 id="greeting">Hello {name}</h1>
            <input placeholder='username...' value={input} onChange={greeting} />
            <button type='submit' onClick={changeName}>Login</button>
            <button onClick={userProfile}>Go to profile</button>
        <BlogList />
    </div>
  )
}

export default Home