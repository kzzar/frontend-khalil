import React from 'react'
import { NavLink } from "react-router-dom"

export default function Nav(){
    return (
        <div className='nav-wrapper'>
            <NavLink exact to="/" className="nav-link"> Home </NavLink>
            <NavLink to="/hats" className="nav-link"> Hats </NavLink>
            <NavLink to="/add-hat" className="nav-link"> Add Hat </NavLink>
        </div>
    )
}