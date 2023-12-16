import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to={`/`} className='link'>FormBuilder</Link>
            <Link to={`/formrendrer`} className='link'>FormRendrer</Link>
        </nav>
    )
}

export default Navbar
