import React from "react";
import UserDark from "../../assets/UserDark.svg";
import CallDark from "../../assets/CallDark.svg";
import CalendarDark from "../../assets/CalendarDark.svg";
import Opp from "../../assets/Opp.svg";
import Task from "../../assets/Task.svg";

import "./Activity.scss";

export default function Activity() {
  const activities = [
    {
      type: "Nandha Kumar",
      time: "",
      description: "",
      icon: UserDark,
      bg: "#B0D9FF",
    },
    {
      type: "Log Call",
      time: "Th ago",
      description: "Called Nandha",
      icon: CallDark,
      bg: "#DAF8E6",
    },
    {
      type: "Meeting",
      time: "2h ago",
      description: "Prepare proposal for Green Energy",
      icon: CalendarDark,
      bg: "#DCDEE2",
    },
    {
      type: "Closed Deal",
      time: "Yesterday",
      description: "Won - Discussed lead requirements",
      icon: Opp,
      bg: "#FAF0E1",
    },
    {
      type: "Task",
      time: "Yesterday",
      description: "Product Demo - Tech Solutions",
      icon: Task,
      bg: "#E2E3E4",
    },
  ];

  return (
    <div className="timeline-content">
      <div className="activity-section-png">
        <div className="timeline-png">
          {activities.map((activity, index) => (
            <div key={index} className="timeline-item-pngs">
              <div
                className="timeline-icon"
                style={{ background: activity.bg }}
              >
                <img src={activity.icon} height={20} width={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title">
                    <span className="activity-type">{activity.type}</span>
                    <span className="activity-types">
                      {activity.description}
                    </span>
                  </div>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
