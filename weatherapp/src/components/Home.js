import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>Home
    
    <Link to={"/home/texttospeech"}> texttospeech</Link></div>
  )
}

export default Home