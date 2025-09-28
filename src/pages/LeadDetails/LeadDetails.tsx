import React, { useState } from "react";
import {
  UilEnvelope,
  UilClipboardNotes,
  UilFile,
  UilUser,
} from "@iconscout/react-unicons";
import "./LeadDetails.scss";
import Profile from "../../assets/profile.png";
import UserInfo from "../../assets/UserInfo.svg";
import Buildings from "../../assets/Buildings.svg";
import InfoCircle from "../../assets/InfoCircle.svg";
import Emailsend from "../../assets/Emailsend.svg";
import PenNewSquare from "../../assets/PenNewSquare.svg";
import CallWhite from "../../assets/CallWhite.svg";
import PipelineCards from "../../components/Notes/Notes";
import FeedbackCards from "../../components/Social/Socialcards";
import SquareArrowRightUp from "../../assets/SquareArrowRightUp.svg";
import UserCheckRounded from "../../assets/UserCheckRounded.svg";
import AttachmentCards from "../../components/Attachment/Attachment";
import Activity from "../../components/Activity/Activity";
import LeadTable from "./DataTable";

const LeadDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeMenu, setActiveMenu] = useState("lead-info");

  const leadData = {
    name: "Thomas Flaming",
    company: "On My Goodrichs Inc",
    email: "sarahgorgeous@exam...",
    phone: "+1123-456-7690",
    source: "Intro",
    status: "Qualified",
    industry: "CRM Software",
    website: "www.onmygoodrichs.con",
    employeeCount: "50-100",
    title: "Director of Sales",
    address: "123 Business Ave, Suite 100",
    city: "San Francisco",
    country: "United States",
  };

  const activities = [
    {
      type: "Send Email",
      time: "Just now",
      description: "Meet with lead - Discussion about contacting services",
      icon: Emailsend,
    },
    {
      type: "Follow up on proposal",
      time: "Th ago",
      description: "Sent to Sarah",
      icon: SquareArrowRightUp,
    },
    {
      type: "Contacted",
      time: "2h ago",
      description: "Left a voicemail",
      icon: CallWhite,
    },
    {
      type: "Closed Deal",
      time: "Yesterday",
      description: "Won - Discussed lead requirements",
      icon: UserCheckRounded,
    },
  ];

  const sideMenuItems = [
    {
      id: "lead-info",
      name: "Lead Info",
      icon: <UilUser />,
      active: true,
    },
    { id: "notes", name: "Notes", icon: <UilClipboardNotes />, count: 6 },
    { id: "attachments", name: "Attachments", icon: <UilFile />, count: 5 },
    { id: "activities", name: "Activities", icon: <UilFile />, count: 8 },
    { id: "emails", name: "Emails", icon: <UilEnvelope />, count: 8 },
    { id: "social", name: "Social", icon: <UilEnvelope />, count: 3 },
  ];

  const additionalInfo = [
    {
      label: "Lead Value",
      value: "₹2,50,000",
    },
    {
      label: "Interest Level",
      value: "High",
    },
    {
      label: "Preferred Contact",
      value: "Email",
    },
    {
      label: "Priority",
      value: "Urgent",
    },
    {
      label: "Follow Up Date",
      value: "2025-09-20",
    },
    {
      label: "Last Interaction",
      value: "2025-09-16",
    },
    {
      label: "Expected Close Date",
      value: "2025-10-10",
    },
    {
      label: "Probability",
      value: "75%",
    },
    {
      label: "Decision Maker",
      value: "Yes",
    },
    {
      label: "Description",
      value: "Schedule product demo",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return activeMenu == "lead-info" ? (
          <div className="overview-content">
            <div className="info-card-group">
              <div className="info-card-wrapper">
                <div className="info-card">
                  <div className="card-header">
                    <div className="card-logo1">
                      <img src={UserInfo} />
                    </div>
                    <h3 className="card-title">Lead Information</h3>
                  </div>
                  <div className="info-grid">
                    <div className="info-row">
                      <span className="info-label">Lead Owner</span>
                      <span className="info-value">Sarah Gorgeous</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Email</span>
                      <span className="info-value">{leadData.email}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Phone</span>
                      <span className="info-value">{leadData.phone}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Title</span>
                      <span className="info-value">{leadData.title}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Lead Source</span>
                      <span className="info-value">{leadData.source}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Lead Status</span>
                      <span className="info-value badge">
                        {leadData.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="card-header">
                    <div className="card-logo">
                      <img src={Buildings} />
                    </div>

                    <h3 className="card-title">Company Information</h3>
                  </div>
                  <div className="info-grid">
                    <div className="info-row">
                      <span className="info-label">Company Name</span>
                      <span className="info-value">Oh My Goodknits Inc</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Fax</span>
                      <span className="info-value">rohan.mehta@innovix...</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Website</span>
                      <span className="info-value">https://kovaiancrm.com</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">No of Employees</span>
                      <span className="info-value">100 - 200</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Rating</span>
                      <span className="info-value">{"4.5/5"}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card info-50">
                <div className="card-header">
                  <div className="card-logo2">
                    <img src={InfoCircle} />
                  </div>
                  <h3 className="card-title">Additional Details</h3>
                </div>
                <div className="info-grid">
                  {additionalInfo?.map((item) => (
                    <div className="info-row">
                      <span className="info-label">{item.label}</span>
                      <span className="info-value">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : activeMenu == "notes" ? (
          <PipelineCards />
        ) : activeMenu == "attachments" ? (
          <div className="attachments-content">
            <div className="card-box">
              <AttachmentCards />
            </div>
          </div>
        ) : activeMenu == "activities" ? (
          <Activity />
        ) : activeMenu == "emails" ? (
          <LeadTable />
        ) : activeMenu == "social" ? (
          <FeedbackCards />
        ) : null;

      case "timeline":
        return (
          <div className="timeline-content">
            <div className="activity-section-png">
              <div className="timeline-png">
                {activities.map((activity, index) => (
                  <div key={index} className="timeline-item-png">
                    <div className="timeline-icon">
                      <img src={activity.icon} height={20} width={20} />
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <span className="activity-type">{activity.type}</span>
                        <span className="activity-time">{activity.time}</span>
                      </div>
                      <p className="activity-description">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="lead-details-png">
      <div className="lead-header-png">
        <div className="lead-wrapper">
          <div className="header-main">
            <div className="profile-section">
              <button className="icon-button">
                <img src={Profile} />
              </button>
            </div>
            <div className="lead-info-header">
              <h1 className="lead-name-png">{leadData.name}</h1>
              <p className="lead-company-png">{leadData.company}</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button className="buttons">
              <img src={Emailsend} height={20} width={20} />
              Send Email
            </button>
            <button className="buttons">
              <img src={CallWhite} height={20} width={20} />
              Convert
            </button>
            <button className="btn btn-secondary">
              <img src={PenNewSquare} />
            </button>
          </div>
        </div>
      </div>

      <div className="lead-content-png">
        <div className="sidebar-png">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Leads</h3>
            <div className="side-menu">
              {sideMenuItems.map((item: any) => (
                <div
                  key={item.id}
                  className={`menu-item ${
                    activeMenu === item.id ? "active" : ""
                  }`}
                  onClick={() => setActiveMenu(item.id)}
                >
                  <div className="menu-icon">{item.icon}</div>
                  <span className="menu-name">{item.name}</span>
                  {item.count > 0 && (
                    <span className="menu-count">{item.count}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="main-content-png">
          <div className="tabs">
            <div className="tab-navigation">
              <button
                className={`tab-btn ${
                  activeTab === "overview" ? "active" : ""
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`tab-btn ${
                  activeTab === "timeline" ? "active" : ""
                }`}
                onClick={() => setActiveTab("timeline")}
              >
                Timeline
              </button>
            </div>

            <div className="last-contact-card">
              <span className="label">Last contact on</span>
              <span className="divider">|</span>
              <span className="date">{"22-04-2025"}</span>
            </div>
          </div>

          <div className="tab-content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
