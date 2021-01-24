import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
        <nav>
            <ul>
              <li><Link to="/dashboard">Home</Link></li>
                {isAuth ? <li><Link to="/logout">Выйти</Link></li> : <li><Link to="/login">Login</Link></li>}
            </ul>
        </nav>
  );
}

export default NavBar;
