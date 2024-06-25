import { hover } from '@testing-library/user-event/dist/hover';
import React, { useEffect, useState } from 'react'
import './Quote.css';

function Quote() {
    const array=["The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill"];

    const [quote,setquote]=useState('');
    useEffect(()=>{
        displayquote();
    },[]);
    const displayquote = () =>{
        let index=Math.floor(Math.random()*array.length);
        let rquote=array[index];
        setquote(rquote);

    }
  return (
    <div>
        <div className='maindiv'>
        <p>{quote}</p>
        <button onClick={displayquote}>Generate Random Quote</button>
        </div>
    </div>
  )
}

export default Quote