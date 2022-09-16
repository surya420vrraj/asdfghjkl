import React, { memo } from 'react';
import "../css/header.css";
import { Link } from 'react-router-dom';

const Header = memo(({setShow}) => {
  console.log('header')
  return (
    <header>
        <Link to="/" className='head'>{process.env.REACT_APP_NAME}</Link>
        <div>
          <input/>
          <div>
            <button className='btn' onClick={setShow}>Login</button>
          </div>
        </div>
    </header>
  )
})

export default Header
