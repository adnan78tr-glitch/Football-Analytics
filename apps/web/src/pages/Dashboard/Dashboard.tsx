import "./Dashboard.css";

const stats = [
  {
    title: "Today's Fixtures",
    value: "183",
    status: "+24 Today",
  },
  {
    title: "Live Matches",
    value: "12",
    status: "3 Started",
  },
  {
    title: "Historical",
    value: "5.2 M",
    status: "Database",
  },
  {
    title: "Collector",
    value: "Running",
    status: "Healthy",
  },
  {
    title: "API",
    value: "Healthy",
    status: "v1",
  },
  {
    title: "Database",
    value: "Connected",
    status: "MySQL",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Professional Football Intelligence Platform</p>
      </div>

      <div className="stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.title}>
            <span className="stat-title">{item.title}</span>
            <h2>{item.value}</h2>
            <span className="stat-status">{item.status}</span>
          </div>
        ))}
      </div>

      <div className="dashboard-panels">
        <div className="dashboard-section">
          <h3>Recent Activity</h3>

          <ul>
            <li>Dashboard initialized</li>
            <li>Collector module prepared</li>
            <li>API module prepared</li>
            <li>Database connection ready</li>
          </ul>
        </div>

        <div className="dashboard-section">
          <h3>System Health</h3>

          <ul>
            <li>API — Healthy</li>
            <li>Collector — Running</li>
            <li>Database — Connected</li>
            <li>Frontend — Online</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;