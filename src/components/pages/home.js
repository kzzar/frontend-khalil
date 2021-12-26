import React from 'react'
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div className='home-wrapper'>
            <h1>Welcome to Khalil's Hat Collection!</h1>
            <div className="home-buttons-wrapper"> 
                <Link to="/hats">Check all my hats</Link>
                <Link to="/add-hat">Add a hat</Link>
            </div>
        </div>
    )
}

