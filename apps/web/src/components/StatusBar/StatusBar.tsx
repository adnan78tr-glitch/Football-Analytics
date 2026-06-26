import "./StatusBar.css";

export default function StatusBar() {
  return (
    <footer className="statusbar">
      <div className="status-left">
        <span className="status-item">
          <span className="dot offline"></span>
          Backend Offline
        </span>

        <span className="status-item">
          <span className="dot offline"></span>
          Collector Offline
        </span>

        <span className="status-item">
          <span className="dot offline"></span>
          API Offline
        </span>
      </div>

      <div className="status-right">
        Version 0.1.0
      </div>
    </footer>
  );
}