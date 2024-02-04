import React, { useState } from 'react';
import { BiMessageAlt } from 'react-icons/bi';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import './NavigationBar.css'; 

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const username = "Brian Motari";

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navigation-bar">
    
      <div className="top-part cyan">
        <div className="message-icon"><BiMessageAlt /></div>
        <Link to="/hr" className="contact-hr">Contact HR</Link>
        <div className="profile-info">
          <div className="profile-icon"><FaRegCircleUser /></div>
          <Link to="/profile" className="user-name">{username}</Link>
          <div className="down-arrow-icon" onClick={toggleMenu}><IoMdArrowDropdown /></div>
        </div>
      </div>

      
      <div className={`bottom-part light-grey ${showMenu ? 'show-menu' : ''}`}>
        <Link to="/" className="company-name"><h3>Radius.ltd</h3></Link>
        <div className="menu-icon" onClick={toggleMenu}>Menu</div>
        <div className={`links ${showMenu ? 'show-links' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Profile</Link>
          <Link to="/benefits" className={location.pathname === '/benefits' ? 'active' : ''}>Benefits</Link>
          <Link to="/required-tasks" className={location.pathname === '/required-tasks' ? 'active' : ''}>Required Tasks</Link>
          <Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>Resources</Link>
          <Link to="/time-off" className={location.pathname === '/time-off' ? 'active' : ''}>Time Off</Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
