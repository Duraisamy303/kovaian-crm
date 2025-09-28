import React, { useState } from "react";
import { UilSearch, UilPlus } from "@iconscout/react-unicons";
import "./Dashboard.scss";
import UserPlus from "../../assets/UserPlus.svg";
import UpChart from "../../assets/UpChart.svg";
import DownChart from "../../assets/DownChart.svg";
import UserBlockRounded from "../../assets/UserBlockRounded.svg";
import ClipboardCheck from "../../assets/ClipboardCheck.svg";
import UserTick from "../../assets/UserTick.svg";
import ListFilter from "../../assets/list-filter.svg";
import { useNavigate } from "react-router-dom";
import DataTable from "./DataTable";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const stats = [
    {
      title: "NEW LEADS",
      value: "1,234",
      change: "+11.01%",
      positive: true,
      icon: UpChart,
      color: "#3b82f6",
      description: "Leads created this month",
      mainIcon: UserPlus,
    },
    {
      title: "LOST",
      value: "567",
      change: "-0.03%",
      positive: false,
      icon: DownChart,
      color: "#ef4444",
      description: "Leads marked as lost",
      mainIcon: UserBlockRounded,
    },
    {
      title: "TOTAL CLOSED",
      value: "2,345",
      change: "+6.08%",
      positive: true,
      icon: UpChart,
      color: "#f59e0b",
      description: "Requires follow-up action",
      mainIcon: UserTick,
    },
    {
      title: "FOLLOW UP",
      value: "8,901",
      change: "+15.03%",
      positive: true,
      icon: UpChart,

      color: "#10b981",
      description: "Successfully closed deals",
      mainIcon: ClipboardCheck,
    },
  ];

 

  return (
    <div className="dashboard">
      <div className="lead-title">
        <div className="stat-icon-container">
          <div className="stat-icon">Leads</div>
        </div>
      </div>

      <div className="stats-row">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <p className="stat-title">{stat.title}</p>
            <div
              className="stat-content"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3 className="stat-value">{stat.value}</h3>

              <div className="stat-icon-container">
                <img src={stat.mainIcon} />
              </div>
            </div>
            <div className="stat-content">
              <div className="stat-meta">
                <span
                  className={`change ${
                    stat.positive ? "positive" : "negative"
                  }`}
                >
                  {stat.change}

                  <img src={stat.icon} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="control-wrapper" style={{}}>
        <div>
          <h2>All Leads</h2>
          <p>Find all leads in a single place</p>
        </div>
        <div className="table-controls">
          <div className="search-filter-container">
            <div className="search-box search-input">
              <UilSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="btn-wrapper">
              <button className="btn btn-secondary">
                <img src={ListFilter} />
              </button>
              <button className="button">
                <UilPlus />
                Add Lead
              </button>
            </div>
          </div>
        </div>
      </div>

      <DataTable />
    </div>
  );
};

export default Dashboard;
