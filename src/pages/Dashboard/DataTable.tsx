import React, { useState } from 'react';
import "../Dashboard/Datatable.scss";
import PenNewSquare from "../../assets/PenNewSquare.svg";
import Trash from "../../assets/Trash.svg";

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 40;
  const totalEntries = 256000;

  const data = [
    {
      id: 1,
      name: 'GaneshPrakash',
      phone: '+91 9083830342',
      email: 'prakashpriya2233@gmail.com',
      status: 'Open',
      source: 'Organic',
      size: '$270.00',
      interest: '----'
    },
    {
      id: 2,
      name: 'GaneshPrakash',
      phone: '+91 9083830342',
      email: 'prakashpriya2233@gmail.com',
      status: 'Close',
      source: 'Organic',
      size: '+$295.00',
      interest: '----'
    },
    {
      id: 3,
      name: 'GaneshPrakash',
      phone: '+91 9083830342',
      email: 'prakashpriya2233@gmail.com',
      status: 'Open',
      source: 'Organic',
      size: '+$295.00',
      interest: '----'
    },
    {
      id: 4,
      name: 'GaneshPrakash',
      phone: '+91 9083830342',
      email: 'prakashpriya2233@gmail.com',
      status: 'Close',
      source: 'Organic',
      size: '+$295.00',
      interest: '----'
    },
    {
      id: 5,
      name: 'GaneshPrakash',
      phone: '+91 9083830342',
      email: 'prakashpriya2233@gmail.com',
      status: 'Close',
      source: 'Organic',
      size: '$270.00',
      interest: '----'
    },
    {
      id: 6,
      name: 'GaneshPrakash',
      phone: '+91 9083830342',
      email: 'prakashpriya2233@gmail.com',
      status: 'Open',
      source: 'Organic',
      size: '+$295.00',
      interest: '----'
    },
    {
      id: 7,
      name: 'GaneshPrakash',
      phone: '+91 9083830342',
      email: 'prakashpriya2233@gmail.com',
      status: 'Close',
      source: 'Organic',
      size: '+$295.00',
      interest: '----'
    }
  ];

  const handlePageChange = (page:any) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    // Previous button
    pages.push(
      <button
        key="prev"
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
    );

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-btn ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Ellipsis and last page
    if (endPage < totalPages) {
      pages.push(<span key="ellipsis" className="pagination-ellipsis">...</span>);
      pages.push(
        <button
          key={totalPages}
          className="pagination-btn"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    );

    return pages;
  };

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Source</th>
              <th>Size</th>
              <th>Interest</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                  <div className="name-cell">
                    <div className="name">{row.name}</div>
                    <div className="phone">{row.phone}</div>
                  </div>
                </td>
                <td>{row.email}</td>
                <td>
                  <span className={`status-badge ${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
                <td>{row.source}</td>
                <td>
                  <span className={`size ${row.size.includes('+') ? 'positive' : 'negative'}`}>
                    {row.size}
                  </span>
                </td>
                <td>{row.interest}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">
                      {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg> */}
                      <img src={PenNewSquare} />
                    </button>
                    <button className="action-btn delete">
                      {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3,6 5,6 21,6"/>
                        <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
                      </svg> */}
                      <img src={Trash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="table-footer">
        <div className="entries-info">
          01 - 08 of {totalEntries.toLocaleString()} entries
        </div>
        <div className="pagination">
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default DataTable;