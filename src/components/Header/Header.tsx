import React, { useState } from "react";
import {
  UilSearch,
  UilBell,
  UilSetting,
  UilUserCircle,
  UilAngleDown,
} from "@iconscout/react-unicons";
import "./Header.scss";
import Chart from "../../assets/chart.svg";
import Bell from "../../assets/Bell.svg";
import QuestionCircle from '../../assets/QuestionCircle.svg'
import Profile from '../../assets/profile.png'


const Header = (props: any) => {
  const { onToggleSidebar, isExpanded } = props;
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        {!isExpanded && (
          <button className="menu-toggle" onClick={onToggleSidebar}>
            ☰
          </button>
        )}
        <div className="search-box">
          <UilSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search leads, contacts..."
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        <div className="header-actions">
          <button className="icon-button">
            <img src={Chart} height={26} width={26} />
          </button>
          <button
            className="user-button"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="user-info">
              <div className="user-name">Treditional CRM</div>
            </div>
            <UilAngleDown
                className={`dropdown-arrow ${isProfileOpen ? "open" : ""}`}
              />
          </button>
          <button className="icon-button">
            <img src={Bell} height={26} width={26} />
          </button>
          <button className="icon-button">
            <img src={QuestionCircle} height={26} width={26} />
          </button>
          <button className="icon-button">
            <img src={Profile} height={35} width={36} />
          </button>

          <div className="user-menu">
            {isProfileOpen && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  <UilUserCircle />
                  My Profile
                </a>
                <a href="#" className="dropdown-item">
                  <UilSetting />
                  Settings
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item logout">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
