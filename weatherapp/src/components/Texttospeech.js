import React, { useState } from 'react'
import './Texttospeech.css'
import {useSpeechSynthesis} from 'react-speech-kit'
function Texttospeech() {
  const [value,setvalue]=useState("")
  const {speak}=useSpeechSynthesis();
  return (
    <div className='hero'>
        <div className='content'>
        <textarea placeholder='Enter Text Here' value={value} className='msg' onChange={(e)=>setvalue(e.target.value)}></textarea>
        <button onClick={()=>speak({Text:value})}>Listen</button>
        </div>
    </div>
  )
}

export default Texttospeech