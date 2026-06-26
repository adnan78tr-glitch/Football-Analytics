import "./StatusBar.css";

export default function StatusBar() {
  return (
    <footer className="statusbar">
      <div className="status-left">
        <span className="status-item">
          <span className="dot offline"></span>
          Backend Çevrimdışı
        </span>

        <span className="status-item">
          <span className="dot offline"></span>
          Veri Toplayıcı Çevrimdışı
        </span>

        <span className="status-item">
          <span className="dot offline"></span>
          API Çevrimdışı
        </span>
      </div>

      <div className="status-right">Sürüm 0.1.0</div>
    </footer>
  );
}