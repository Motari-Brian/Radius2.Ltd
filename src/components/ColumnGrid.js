import React from 'react';
import Masonry from 'react-masonry-css';
import { RiFileTextLine } from 'react-icons/ri'; 
import './ColumnGrid.css'; 
import { PiUserRectangleDuotone } from "react-icons/pi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { LuUserSquare2 } from "react-icons/lu";


const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

const ColumnGrid = () => {
  return (
    <div style={{ maxWidth: '85%', margin: '0 auto' }}>
      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        
        <div className="column">
          <div className="rectangle">
            <h4>My time off</h4>
            <div className="time-off-details">
              <p>Hours Taken <br/>0 hours</p>
              <p>Hours Remaining <br/>151.59 hours</p>
            </div>
            <p>No upcoming time off</p>
            <button className="request-button">Request Time Off</button>
          </div>
        </div>

        <div className="column">
          <div className="rectangle">
            <h4>Compliance Documents</h4>
            <div className="documents-list">
              <div className="document-item">
                <span className="document-icon">
                  <RiFileTextLine size={30} />
                </span>
          
                <span className="document-details">
                  <a href="#">401k Participant fee Disclosure</a>
                  <p>{new Date('2024-02-10').toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </span>
                <span className="document-icon1">
                <BsBoxArrowUpRight />
                </span>
              </div>
            </div>
            <div className="documents-list">
              <div className="document-item">
                <span className="document-icon">
                  <RiFileTextLine size={30} />
                </span>
          
                <span className="document-details">
                  <a href="#">2024 BlueChoice Benefits Summary, Medical & Dental</a>
                  <p>{new Date('2024-02-10').toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </span>
                <span className="document-icon1">
                <BsBoxArrowUpRight />
                </span>
              </div>
            </div>
            <div className="documents-list">
              <div className="document-item">
                <span className="document-icon">
                  <RiFileTextLine size={30} />
                </span>
          
                <span className="document-details">
                  <a href="#">2024 BlueChoice BEnefits Summary</a>
                  <p>{new Date('2024-02-10').toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </span>
                <span className="document-icon1">
                <BsBoxArrowUpRight />
                </span>
              </div>
            </div>
            <div className="documents-list">
              <div className="document-item">
                <span className="document-icon">
                  <RiFileTextLine size={30} />
                </span>
          
                <span className="document-details">
                  <a href="#">Vison Retail Benefits Listing</a>
                  <p>{new Date('2024-02-10').toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </span>
                <span className="document-icon1">
                <BsBoxArrowUpRight />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="rectangle">
          <p>You have an unread company message. <a href="#" className="message-link">View Message</a>.</p>
          </div>
        </div>


          <div className="column">
            <div className="rectangle contact-info">
              <h4>Contacts</h4>
              <div className="user-details">
                <span className="user-icon">
                <LuUserSquare2 size="40"/>
                </span>
                <ul className="contact-list">
                  <li>David Lee</li>
                  <li>Sr. Human Resources Manager</li>
                  <li><a href="mailto:dlee@company.com" className="contact-email">dlee@company.com</a></li>
                  <li><a href="tel:+14048121532" className="phone-number"> (404) 812-1532 </a></li>
                </ul>
              </div>
            </div>
          </div>

        <div className="column">
        <div className="rectangle">
            <h4>News & Articles</h4>
            <div className="documents-list">
              <div className="document-item">
                <span className="document-icon">
                  <RiFileTextLine size={30} />
                </span>
          
                <span className="document-details">
                  <a href="#">Benefits ate important to you!</a>
                  <p>{new Date('2024-02-10').toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </span>
              </div>
            </div>
            
          </div>
        </div>
        <div className="column">
          <div className="rectangle">
            <h4>Quick Links</h4>
            <div className="quick-links">
              <a href="#" className="quick-link" target="_blank" rel="noopener noreferrer">Wew MD</a>
              <a href="#" className="quick-link" target="_blank" rel="noopener noreferrer">The Mayo Clinic</a>
              <a href="#" className="quick-link" target="_blank" rel="noopener noreferrer">National Institute Of Health</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="rectangle">
            
          </div>
        </div>
        <div className="column">
          <div className="rectangle">
            
          </div>
        </div>
        
        
        
        <div className="column">
        <div className="rectangle">
            <h4>Other Documents</h4>
            <div className="documents-list">
              <div className="document-item">
                <span className="document-icon">
                  <RiFileTextLine size={30} />
                </span>
          
                <span className="document-details">
                  <a href="#">HR Handbook</a>
                  <p>{new Date('2024-02-10').toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </span>
                <span className="document-icon1">
                <BsBoxArrowUpRight />
                </span>
              </div>
            </div>
            <div className="documents-list">
              <div className="document-item">
                <span className="document-icon">
                  <RiFileTextLine size={30} />
                </span>
          
                <span className="document-details">
                  <a href="#">Your First Week at Radius LTD</a>
                  <p>{new Date('2024-02-10').toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </span>
                <span className="document-icon1">
                <BsBoxArrowUpRight />
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </Masonry>
    </div>
  );
};

export default ColumnGrid;
