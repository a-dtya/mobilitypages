import React, {  useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  
  const [showSearch, setShowSearch] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [mobileMenuOpen,setMobileMenuOpen]=useState(false)
  const toggleSearchField = () => {
    setShowSearch(!showSearch);
  };

  const handleNavLinkClick = (link,e) => {
    
    setActiveLink(link);
    
  };
  const handleMobileMenuToggle=()=>{
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    
    <nav
      className={`fixing navbar navbar-expand-lg navbar-light p-0 bg-white  ${
        showSearch ? 'search-expanded' : ''
      }`} style={{position:'fixed',top:'0',right:'0',left:'0',overflow:'hidden',borderBottom: '1px solid #ccc',zIndex:1000}}
    >
      {!showSearch && (
        <React.Fragment>
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Your Logo" style={{ height: '40px', marginLeft: '1.2rem' }} />
          </a>
          <span className="navbar-text ml-2 fs-5" style={{ fontWeight: 300, color: 'black' }}>Mobility Pages</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleMobileMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse justify-content-end ${mobileMenuOpen ? 'show' : ''}`} 
            id="navbarNav">
         
            <ul className="navbar-nav">
              <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
                <Link className="nav-link " to="/" onClick={(e) => handleNavLinkClick('home',e) } >
                  Home
                </Link>
                
              </li>
              
              <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}>
                <Link className="nav-link " to="/about" onClick={(e) => handleNavLinkClick('about',e)}>
                  About
                </Link>
              </li>
              <li className={`nav-item ${activeLink === 'searchdata' ? 'active' : ''}`}>
                <Link className="nav-link " to="/searchdata" onClick={(e) => handleNavLinkClick('searchdata',e)}>
                  Search Data
                </Link>
              </li>
              <li className={`nav-item ${activeLink === 'submitcompany' ? 'active' : ''}`}>
                <a className="nav-link " href="/submitcompany" onClick={(e) => handleNavLinkClick('submitcompany',e)}>
                  Submit a Company
                </a>
              </li>
              <li className={`nav-item ${activeLink === 'substack' ? 'active' : ''}`}>
                <a className="nav-link " href="/substack" onClick={(e) => handleNavLinkClick('substack',e)}>
                  Substack
                </a>
              </li>
              {
                mobileMenuOpen ? (<></>) : (
                  <li className="nav-item">
                <button
                  className="btn btn-secondary ml-2 btn-light"
                  onClick={toggleSearchField}
                >
                  <FontAwesomeIcon icon={faSearch} style={{ color: '#616161' }} />
                </button>
              </li>
                )
              }
              
              
            </ul>
          
          </div>
        
        </React.Fragment>
      )}

      {showSearch && (
        <div className='w-100  d-flex align-items-center my-0' style={{ height: '5.5rem', backgroundColor: '#eeeeee' }}>
          <div className="search-feature d-flex ">
            <button
              className="btn btn-secondary btn-light "
              onClick={toggleSearchField}
              style={{ marginRight: '23rem', backgroundColor: '#eeeeee', marginLeft: '2rem', }}
            >
              <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#616161', }} />
            </button>
            <div className="input-group">
              <div className="input-group-append  ">
                <button className="btn" style={{ color: 'white', backgroundColor: 'white', borderRadius: '0', marginTop: '0.05rem' }} type="button">
                  <FontAwesomeIcon icon={faSearch} style={{ color: '#616161' }} />
                </button>
              </div>
              <input
                type="text"
                className="form-control "
                placeholder="Search this website..."
                style={{ width: '38rem', height: '2.45rem' }}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
    
  );
};

export default NavBar;