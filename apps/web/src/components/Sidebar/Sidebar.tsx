import "./Sidebar.css";

const menuItems = [
  { id: "dashboard", icon: "🏠", label: "Dashboard" },
  { id: "fixtures", icon: "⚽", label: "Fixtures" },
  { id: "live", icon: "🔴", label: "Live" },
  { id: "historical", icon: "📚", label: "Historical" },
  { id: "analytics", icon: "📊", label: "Analytics" },
  { id: "backtest", icon: "📈", label: "Backtest" },
  { id: "predictions", icon: "🤖", label: "Predictions" },
  { id: "settings", icon: "⚙", label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            className={`sidebar-item ${index === 0 ? "active" : ""}`}
          >
            <span className="sidebar-icon">{item.icon}</span>

            <span className="sidebar-label">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}