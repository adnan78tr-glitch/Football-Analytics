import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    path: "/",
    icon: "🏠",
    label: "Gösterge Paneli",
  },
  {
    path: "/explorer",
    icon: "⚽",
    label: "Maç Gezgini",
  },
  {
    path: "/analytics",
    icon: "📊",
    label: "Analizler",
  },
  {
    path: "/backtest",
    icon: "📈",
    label: "Backtest",
  },
  {
    path: "/collector",
    icon: "🛰️",
    label: "Veri Toplayıcı",
  },
  {
    path: "/settings",
    icon: "⚙️",
    label: "Ayarlar",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span className="sidebar-label">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}