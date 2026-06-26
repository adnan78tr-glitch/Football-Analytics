import "./Explorer.css";

export default function Explorer() {
  return (
    <div className="explorer">
      <div className="explorer-header">
        <h1>Maç Gezgini</h1>

        <div className="toolbar">
          <input
            type="text"
            placeholder="Maç ara..."
          />

          <select>
            <option>Tüm Ligler</option>
          </select>

          <select>
            <option>Tüm Marketler</option>
          </select>

          <button>Yenile</button>
        </div>
      </div>

      <div className="grid-placeholder">
        AG GRID
      </div>

      <div className="explorer-footer">
        <span>Aktif Filtre : 0</span>

        <span>Sonuç : 0</span>
      </div>
    </div>
  );
}