import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="header-left">

        <div className="logo">

          <div className="logo-icon">
            FA
          </div>

          <div className="logo-text">

            <span className="logo-title">
              Football Analytics
            </span>

            <span className="logo-subtitle">
              Professional Football Intelligence
            </span>

          </div>

        </div>

      </div>

      <div className="header-right">

        <div className="header-menu">

          <button className="menu-button active">
            LIVE
          </button>

          <button className="menu-button">
            Database
          </button>

          <button className="menu-button">
            API
          </button>

        </div>

        <div className="user-avatar">
          AK
        </div>

      </div>

    </header>
  );
}