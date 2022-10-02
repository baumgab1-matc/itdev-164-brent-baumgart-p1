import React from 'react'
import { Link } from "gatsby"

// Nothing too speical here, just a regular bootstrap navbar
const Navbar = ({data}) => {
    console.log(data);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            {/* <a className="navbar-brand" >Quick Licks</a> */}
            <Link to='/' className='navbar-brand'>
                Quick Licks
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
            <div className="navbar-nav me-auto">
                <Link to='/' className="nav-item" activeClassName='active-link'>
                    <div className='nav-link'>Home</div>
                </Link>

                <Link to='/archive' className="nav-item" activeClassName='active-link'>
                    <span className='nav-link'>Archive</span>
                </Link>

                <Link to='/category' className="nav-item" activeClassName='active-link'>
                    <span className='nav-link'>Categories</span>
                </Link>
            </div>
            <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
  )
}


export default Navbar