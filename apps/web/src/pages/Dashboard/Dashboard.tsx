import "./Dashboard.css";

const stats = [
  {
    title: "Bugünkü Maçlar",
    value: "183",
    status: "+24 Bugün",
  },
  {
    title: "Canlı Maçlar",
    value: "12",
    status: "3 Yeni Başladı",
  },
  {
    title: "Geçmiş Maçlar",
    value: "5.2 M",
    status: "Veritabanı",
  },
  {
    title: "Veri Toplayıcı",
    value: "Çalışıyor",
    status: "Sağlıklı",
  },
  {
    title: "API Durumu",
    value: "Sağlıklı",
    status: "v1",
  },
  {
    title: "Veritabanı",
    value: "Bağlı",
    status: "MySQL",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Gösterge Paneli</h1>
        <p>Profesyonel Futbol Analiz Platformu</p>
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
          <h3>Son İşlemler</h3>

          <ul>
            <li>Gösterge paneli oluşturuldu.</li>
            <li>React uygulaması çalışıyor.</li>
            <li>Collector modülü hazırlandı.</li>
            <li>API altyapısı hazırlandı.</li>
          </ul>
        </div>

        <div className="dashboard-section">
          <h3>Sistem Durumu</h3>

          <ul>
            <li>API — Sağlıklı</li>
            <li>Veri Toplayıcı — Çalışıyor</li>
            <li>Veritabanı — Bağlı</li>
            <li>Frontend — Çevrimiçi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}