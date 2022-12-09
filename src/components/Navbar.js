import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from 'react';
import "./Navbar.css"

function Navbar() {
  return (
      
    <nav className='nav'>
       
        <ul>
            <li>
            <a href='/' className='title'>Good Will Cargo</a>
            </li>
            <li>
                <CustomLink to='Register'>Register</CustomLink>
            </li>
            <li>
                <CustomLink to='/Products'>Product</CustomLink>
            </li>
        </ul>

    </nav>
  )
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;