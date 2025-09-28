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

const LeadTable: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>([
    {
      id: "1",
      subject: "Follow up on our conversation",
      from: "sarah@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-15 14:30",
      status: "opened",
      hasAttachment: true,
      priority: "high"
    },
    {
      id: "2",
      subject: "Product Demo Scheduled",
      from: "sarah@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-14 11:15",
      status: "sent",
      hasAttachment: false,
      priority: "medium"
    },
    {
      id: "3",
      subject: "Proposal Document Review",
      from: "sarah@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-13 16:45",
      status: "opened",
      hasAttachment: true,
      priority: "high"
    },
    {
      id: "4",
      subject: "Meeting Reminder - Quarterly Review",
      from: "sarah@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-12 09:20",
      status: "sent",
      hasAttachment: false,
      priority: "medium"
    },
    {
      id: "5",
      subject: "Contract Review and Feedback",
      from: "sarah@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-11 13:10",
      status: "draft",
      hasAttachment: true,
      priority: "low"
    },
    {
      id: "6",
      subject: "Welcome to Our Platform",
      from: "support@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-10 10:00",
      status: "opened",
      hasAttachment: false,
      priority: "low"
    },
    {
      id: "7",
      subject: "Payment Confirmation #INV-2024-001",
      from: "billing@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-09 15:30",
      status: "sent",
      hasAttachment: true,
      priority: "high"
    },
    {
      id: "8",
      subject: "Product Update - New Features",
      from: "updates@company.com",
      to: "thomas@goodrichs.com",
      date: "2024-01-08 11:45",
      status: "failed",
      hasAttachment: false,
      priority: "medium"
    }
  ]);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      sent: { label: "Sent", color: "#10B981", bgColor: "#ECFDF5" },
      draft: { label: "Draft", color: "#6B7280", bgColor: "#F3F4F6" },
      opened: { label: "Opened", color: "#3B82F6", bgColor: "#EFF6FF" },
      failed: { label: "Failed", color: "#EF4444", bgColor: "#FEF2F2" },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <span
        className="status-badge"
        style={{ 
          backgroundColor: config.bgColor, 
          color: config.color,
          border: `1px solid ${config.color}20`
        }}
      >
        {config.label}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      high: { label: "High", color: "#EF4444", bgColor: "#FEF2F2" },
      medium: { label: "Medium", color: "#F59E0B", bgColor: "#FFFBEB" },
      low: { label: "Low", color: "#10B981", bgColor: "#ECFDF5" },
    };

    const config = priorityConfig[priority as keyof typeof priorityConfig];
    return (
      <span
        className="priority-badge"
        style={{ 
          backgroundColor: config.bgColor, 
          color: config.color,
          border: `1px solid ${config.color}20`
        }}
      >
        {config.label}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return (
      <div className="date-content">
        <div className="date-main">
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div className="date-time">
          {date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </div>
      </div>
    );
  };

  const handleDelete = (id: string) => {
    setEmails(emails.filter(email => email.id !== id));
  };

  const handleResend = (id: string) => {
    console.log(`Resending email ${id}`);
  };

  return (
    <div className="email-table-container">
      <div className="table-header-section">
        <div className="header-content">
          <h2 className="table-main-title">Email Communications</h2>
          <p className="table-subtitle">All email interactions with Thomas Flaming</p>
        </div>
        <div className="header-actions">
          <button className="action-btn primary-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export CSV
          </button>
          <button className="action-btn primary-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14,2 14,8 20,8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10,9 9,9 8,9"></polyline>
            </svg>
            New Email
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="email-data-table">
          <thead>
            <tr>
              <th className="col-subject">Subject</th>
              <th className="col-from">From</th>
              <th className="col-to">To</th>
              <th className="col-date">Date & Time</th>
              <th className="col-priority">Priority</th>
              <th className="col-status">Status</th>
              <th className="col-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email) => (
              <tr key={email.id} className="email-table-row">
                <td className="col-subject">
                  <div className="subject-cell">
                    <div className="subject-main">
                      <span className="subject-text">{email.subject}</span>
                      {email.hasAttachment && (
                        <span className="attachment-indicator" title="Has attachment">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="col-from">
                  <div className="email-address from-address">
                    {email.from}
                  </div>
                </td>
                <td className="col-to">
                  <div className="email-address to-address">
                    {email.to}
                  </div>
                </td>
                <td className="col-date">
                  {formatDate(email.date)}
                </td>
                <td className="col-priority">
                  {getPriorityBadge(email.priority)}
                </td>
                <td className="col-status">
                  {getStatusBadge(email.status)}
                </td>
                <td className="col-actions">
                  <div className="action-buttons">
                    <button 
                      className="icon-btn view-btn" 
                      title="View Email"
                      onClick={() => console.log(`View email ${email.id}`)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <button 
                      className="icon-btn reply-btn" 
                      title="Reply"
                      onClick={() => console.log(`Reply to email ${email.id}`)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 10 4 15 9 20"></polyline>
                        <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                      </svg>
                    </button>
                    {email.status === "failed" && (
                      <button 
                        className="icon-btn resend-btn" 
                        title="Resend"
                        onClick={() => handleResend(email.id)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M23 4v6h-6"></path>
                          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                        </svg>
                      </button>
                    )}
                    <button 
                      className="icon-btn delete-btn" 
                      title="Delete"
                      onClick={() => handleDelete(email.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="footer-info">
          Showing {emails.length} of {emails.length} emails
        </div>
        <div className="footer-actions">
          <button className="footer-btn" disabled>
            Previous
          </button>
          <span className="page-info">Page 1 of 1</span>
          <button className="footer-btn" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadTable;