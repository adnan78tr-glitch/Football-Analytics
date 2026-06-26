import "./Sidebar.css";
import tr from "../../i18n/tr";

const menuItems = [
  { id: "dashboard", icon: "🏠", label: tr.dashboard },
  { id: "explorer", icon: "⚽", label: tr.explorer },
  { id: "analytics", icon: "📊", label: tr.analytics },
  { id: "backtest", icon: "📈", label: tr.backtest },
  { id: "collector", icon: "🛰", label: tr.collector },
  { id: "settings", icon: "⚙", label: tr.settings },
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
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}