import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar(props) {
  
console.log(props)
    return (

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Movies</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Signup">Signup</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;