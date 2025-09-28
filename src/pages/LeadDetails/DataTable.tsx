import React, { useState } from "react";
import "./Datatable.scss";

interface Email {
  id: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  status: "sent" | "draft" | "opened" | "failed";
  hasAttachment: boolean;
  priority: "high" | "medium" | "low";
}

const EmailTable: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>([
    {
      id: "1",
      subject: "Follow up on our conversation",
      from: "sarah@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-15 14:30",
      status: "opened",
      hasAttachment: true,
      priority: "high",
    },
    {
      id: "2",
      subject: "Product Demo Scheduled",
      from: "sarah@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-14 11:15",
      status: "sent",
      hasAttachment: false,
      priority: "medium",
    },
    {
      id: "3",
      subject: "Proposal Document Review",
      from: "sarah@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-13 16:45",
      status: "opened",
      hasAttachment: true,
      priority: "high",
    },
    {
      id: "4",
      subject: "Meeting Reminder - Quarterly Review",
      from: "sarah@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-12 09:20",
      status: "sent",
      hasAttachment: false,
      priority: "medium",
    },
    {
      id: "5",
      subject: "Contract Review and Feedback",
      from: "sarah@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-11 13:10",
      status: "draft",
      hasAttachment: true,
      priority: "low",
    },
  ]);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      sent: { label: "SENT", color: "#10B981", bgColor: "#ECFDF5" },
      draft: { label: "DRAFT", color: "#6B7280", bgColor: "#F3F4F6" },
      opened: { label: "OPENED", color: "#3B82F6", bgColor: "#EFF6FF" },
      failed: { label: "FAILED", color: "#EF4444", bgColor: "#FEF2F2" },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <span
        className="email-status-badge"
        style={{
          backgroundColor: config.bgColor,
          color: config.color,
        }}
      >
        {config.label}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="email-comm-container">
      <div className="email-comm-table-container">
        <div className="email-comm-table-scroll-wrapper">
          <table className="email-comm-table">
            <thead className="email-comm-table-header">
              <tr>
                <th className="email-col-subject">Subject</th>
                <th className="email-col-to">To</th>
                <th className="email-col-date">Date & Time</th>
                <th className="email-col-status">Status</th>
              </tr>
            </thead>
            <tbody className="email-comm-table-body">
              {emails.map((email) => (
                <tr key={email.id} className="email-comm-row">
                  <td className="email-col-subject">
                    <div className="email-subject-content">
                      <span className="email-subject-text">
                        {email.subject}
                      </span>
                      {email.hasAttachment && (
                        <span
                          className="email-attachment-indicator"
                          title="Has attachment"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                          </svg>
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="email-col-to">
                    <span className="email-to-address">{email.to}</span>
                  </td>
                  <td className="email-col-date">
                    <span className="email-date-text">
                      {formatDate(email.date)}
                    </span>
                  </td>
                  <td className="email-col-status">
                    {getStatusBadge(email.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="email-comm-mobile-view">
        {emails.map((email) => (
          <div key={email.id} className="email-comm-mobile-card">
            <div className="email-comm-card-header">
              <div className="email-comm-card-subject">
                <span className="email-subject-text">{email.subject}</span>
                {email.hasAttachment && (
                  <span
                    className="email-attachment-indicator"
                    title="Has attachment"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                    </svg>
                  </span>
                )}
              </div>
              {getStatusBadge(email.status)}
            </div>
            <div className="email-comm-card-content">
              <div className="email-comm-card-row">
                <span className="email-comm-card-label">To:</span>
                <span className="email-comm-card-value">{email.to}</span>
              </div>
              <div className="email-comm-card-row">
                <span className="email-comm-card-label">Date:</span>
                <span className="email-comm-card-value">
                  {formatDate(email.date)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailTable;
