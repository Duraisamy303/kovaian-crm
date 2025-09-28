import React from "react";
import "../Attachment/Attachment.scss";
import Upload from "../../assets/Upload.svg";
import PDF from "../../assets/PDF.svg";
import Download from "../../assets/Download.svg";
import TrashRed from "../../assets/Trash-red.svg";

import { UilFilter } from "@iconscout/react-unicons";

interface AttachmentFile {
  id: string;
  name: string;
  size: string;
  date: string;
  type: string;
}

const AttachmentCards: React.FC = () => {
  const files: AttachmentFile[] = [
    {
      id: "1",
      name: "File Title.pdf",
      size: "313 KB",
      date: "31 Aug 2022",
      type: "pdf",
    },
    {
      id: "2",
      name: "Design File.ai",
      size: "2.1 MB",
      date: "15 Sep 2022",
      type: "ai",
    },
    {
      id: "3",
      name: "Presentation.ppt",
      size: "1.5 MB",
      date: "22 Jul 2022",
      type: "ppt",
    },
    {
      id: "4",
      name: "Document.docx",
      size: "890 KB",
      date: "10 Jun 2022",
      type: "word",
    },
    {
      id: "5",
      name: "Image.png",
      size: "1.2 MB",
      date: "05 May 2022",
      type: "png",
    },
    {
      id: "6",
      name: "Video.mp4",
      size: "4.5 MB",
      date: "12 Apr 2022",
      type: "mp4",
    },
  ];

  return (
    <div className="attachment-container">
      <div className="upload-section">
        <div className="upload-box">
          <div className="upload-icon">
            <img src={Upload} />
          </div>
          <h3 className="upload-title">
            Drag & drop files or <span className="browser">Browse</span>
          </h3>
          <p className="upload-subtitle">
            Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
          </p>
        </div>
      </div>

      <div className="files-section">
        <div className="files-title">
          <div>UPLOAD FILES</div>
          <div className="filter-select">
            <UilFilter className="filter-icon" />
            <select
            // value={statusFilter}
            // onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">File Format</option>
              <option value="Open">Open</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Lost">Lost</option>
            </select>
          </div>
        </div>

        <div className="files-grid">
          {files.map((file) => (
            <div key={file.id} className="file-card">
              <div className="file-header">
                <div className="file-title">
                  <img src={PDF} />
                  <div className="file-info">
                    <div className="file-name">{file.name}</div>
                    <div className="file-meta">
                      <span className="file-size">{file.size}</span>
                      <span className="file-dot"></span>

                      <span className="file-date">{file.date}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="" style={{ display: "flex", gap: "5px" }}>
                    <div className="btn btn-secondary ">
                      <img src={Download} height={20} width={20} />
                    </div>
                    <div className="btn btn-secondary ">
                      <img src={TrashRed} height={20} width={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttachmentCards;
