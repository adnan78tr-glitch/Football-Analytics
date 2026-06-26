import "./Dashboard.css";

const stats = [
  {
    title: "Today's Fixtures",
    value: "183",
    status: "+24 today",
  },
  {
    title: "Live Matches",
    value: "12",
    status: "3 just started",
  },
  {
    title: "Historical Matches",
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

            <span className="stat-status">
              {item.status}
            </span>
          </div>
        ))}
      </div>

      <div className="dashboard-section">
        <h3>Recent Activity</h3>

        <ul>
          <li>Project initialized</li>
          <li>React application running</li>
          <li>Dashboard layout completed</li>
          <li>Collector module prepared</li>
          <li>API module prepared</li>
        </ul>
      </div>

      <div className="dashboard-footer">
        Football Analytics v0.1
      </div>

    </div>
  );
};

export default Dashboard;