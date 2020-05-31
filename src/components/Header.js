import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        <h2 className='ui violet header'>React-Redux-Blog</h2>
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          <h2 className='ui violet header'> All Blogs</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
