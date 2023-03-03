
import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header id="site-header" className="fixed-top">
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html">
                <i className="fas fa-bold"></i>.
            </a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/Home'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/About'>My Intro</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Service'>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Contact'>Contact</Link>
                    </li>
                </ul>
                <form action="#search" method="GET" class="d-flex search-header">
                    <input className="form-control" type="search" placeholder="Enter Keyword..." aria-label="Search"
                        required />
                    <button className="btn btn-style" type="submit">Search</button>
                </form>
            </div>
        
            <div className="cont-ser-position">
                <nav className="navigation">
                    <div className="theme-switch-wrapper">
                        <label className="theme-switch" for="checkbox">
                            <input type="checkbox" id="checkbox"/>
                            <div className="mode-container">
                                <i className="gg-sun"></i>
                                <i className="gg-moon"></i>
                            </div>
                        </label>
                    </div>
                </nav>
            </div>
       
        </nav>
    </div>
</header>
</>
  )
}

export default Header;