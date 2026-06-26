import "./Header.css";
import tr from "../../i18n/tr";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-icon">FA</div>

          <div className="logo-text">
            <span className="logo-title">{tr.appName}</span>

            <span className="logo-subtitle">
              Profesyonel Futbol Analiz Platformu
            </span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="header-menu">
          <button className="menu-button active">CANLI</button>

          <button className="menu-button">Veritabanı</button>

          <button className="menu-button">API</button>
        </div>

        <div className="user-avatar">AK</div>
      </div>
    </header>
  );
}