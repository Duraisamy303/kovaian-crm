import React from "react";
import "../Notes/Notes.scss";
import StarsMinimalistic from "../../assets/StarsMinimalistic.svg";
import Trash from "../../assets/Trash.svg";

interface PipelineCard {
  id: string;
  title: string;
  date: string;
  description: string;
  status: string;
}

const PipelineCards: React.FC = () => {
  const cards: PipelineCard[] = [
    {
      id: "1",
      title: "Initial Contact",
      date: "11-March-2024",
      description:
        "Spoke with lead on intro call, discussed product overview and shared pricing deck.",
      status: "#0078E8",
    },
    {
      id: "2",
      title: "Follow-up Email Sent",
      date: "11-March-2024",
      description:
        "Spoke with lead on intro call, discussed product overview and shared pricing deck.",
      status: "#B0D9FF",
    },
    {
      id: "3",
      title: "Demo Scheduled",
      date: "11-March-2024",
      description:
        "Spoke with lead on intro call, discussed product overview and shared pricing deck.",
      status: "#13C445",
    },
    {
      id: "4",
      title: "Budget Discussion",
      date: "11-March-2024",
      description:
        "Spoke with lead on intro call, discussed product overview and shared pricing deck.",
      status: "#FD787A",
    },
    {
      id: "5",
      title: "Decision Pending",
      date: "11-March-2024",
      description:
        "Spoke with lead on intro call, discussed product overview and shared pricing deck.",
      status: "#0084FF",
    },
    {
      id: "6",
      title: "Closed Won",
      date: "11-March-2024",
      description:
        "Spoke with lead on intro call, discussed product overview and shared pricing deck.",
      status: "#E4A951",
    },
  ];

  return (
    <div className="pipeline-container">
      <div className="pipeline-grid">
        {cards.map((card) => (
          <div key={card.id} className="pipeline-card">
            <div
              className="line"
              style={{
                backgroundColor: card.status,
              }}
            ></div>
            <div className="card-header">
              <div className="card-title-row">
                <h3 className="card-title">{card.title}</h3>
                <span
                  className={`status-indicator`}
                  style={{
                    backgroundColor: card.status,
                  }}
                ></span>
              </div>
              <div className="card-date">{card.date}</div>
            </div>

            <div className="card-content">
              <p className="card-description">{card.description}</p>
            </div>
            <div className="card-actions">
              <div className="btn btn-secondary ">
                <img src={StarsMinimalistic} height={20} width={20}  />
              </div>
              <div className="btn btn-secondary ">
                <img src={Trash} height={20} width={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PipelineCards;
