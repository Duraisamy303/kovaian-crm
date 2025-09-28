import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/logo.png";
import Collapse from "../../assets/Collapse.svg";
import UserWhite from "../../assets/UserWhite.svg";
import UserSquareWhite from "../../assets/UserSquareWhite.svg";
import StyleOutline from "../../assets/StyleOutline.svg";
import TickerStar from "../../assets/TickerStar.svg";
import PhoneCallingRounded from "../../assets/PhoneCallingRounded.svg";
import ClipboardText from "../../assets/ClipboardText.svg";
import Calendar from "../../assets/Calendar.svg";
import Notebook from "../../assets/Calendar.svg";
import Project from "../../assets/Project.svg";

const Sidebar = (props: any) => {
  const { isExpanded, onToggle, isMobile } = props;
  const menuItems = [
    { icon: UserWhite, label: "Dashboard", path: "/", active: true },
    { icon: UserSquareWhite, label: "Leads", path: "/leads/:1" },
    { icon: StyleOutline, label: "Contacts", path: "/contacts" },
    { icon: TickerStar, label: "Accounts", path: "/accounts" },
    { icon: PhoneCallingRounded, label: "Deals", path: "/deals" },
    { icon: ClipboardText, label: "Tasks", path: "/tasks" },
    { icon: Calendar, label: "Meetings", path: "/meetings" },
    { icon: Notebook, label: "Documents", path: "/documents" },
    { icon: Project, label: "Projects", path: "/projects" },
  ];

  return (
    <>
      {isMobile && isExpanded && (
        <div className="sidebar-overlay" onClick={onToggle} />
      )}
      <aside
        className={`sidebar ${isExpanded ? "expanded" : "collapsed"} ${
          isMobile ? "mobile" : ""
        }`}
      >
        <div className="sidebar-header">
          <div className="logo">
            <img src={logo} height={50} width={50} />
          </div>
          {isExpanded && (
            <div onClick={onToggle}>
              <img src={Collapse} />
            </div>
          )}
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className={`sidebar-item ${item.active ? "active" : ""}`}
            >
              <span className="sidebar-icon">
                <img src={item.icon} />
              </span>
              {isExpanded && (
                <span className="sidebar-label">{item.label}</span>
              )}
              {item.active && <div className="active-indicator"></div>}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
