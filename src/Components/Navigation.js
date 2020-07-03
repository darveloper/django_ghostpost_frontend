import React from "react";
import { NavLink } from 'react-router-dom'

const Navigation = ({ posts }) => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <br />
            <NavLink to='/boasts'>Boasts</NavLink>
            <br />
            <NavLink to='/roasts'>Roasts</NavLink>
        </div>
    )
}

export default Navigation;