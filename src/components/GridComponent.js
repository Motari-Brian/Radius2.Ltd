import React from 'react';
import { Link } from 'react-router-dom'; 
import './GridComponent.css';
import { LuScrollText, LuWallet } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { GiDiamondRing } from "react-icons/gi";
import { CiBoxList } from "react-icons/ci";

const GridComponent = () => {
  
  const gridData = [
    { icon: <FaRegCircleUser/>, description: { path: '/profile', text: 'View Profile' } },
    { icon: <LuScrollText />, description: { path: '/documentlibrary', text: 'Document Library' } },
    { icon: <CiBoxList/>, description: { path: '/enrollmentsummary', text: 'Enrollment Summary' } },
    { icon: <GiDiamondRing />, description: { path: '/lifeevents', text: 'Life events' } },
    { icon: <LuWallet/>, description: { path: '/totalcompensation', text: 'Total Compensation Statement' } },
  ];

  return (
    <div className="grid-container">
      {gridData.map((item, index) => (
        <div key={index} className="grid-item">
          <Link to={item.description.path}>
            <div className="icon">{item.icon}</div>
          </Link>
          <div className="description">
            <Link to={item.description.path}>
              {item.description.text}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
