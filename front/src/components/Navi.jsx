import React from 'react'
import {Link} from 'react-router-dom'
import Products from './Products/Products'

function Navi() {
  return (
    <div className="navbar bg-base-100 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a><Link to='/products'>All Ads</Link></a></li>
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        <li><a>My Ads</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">OLX</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a><Link to='/products'>All Ads</Link></a></li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
      <li><a>My Ads</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">User</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Login</a></li>
    <li><a>Logout</a></li>
  </ul>
</div>
  </div>
</div>
  )
}

export default Navi