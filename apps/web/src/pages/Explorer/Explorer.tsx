import "./Explorer.css";

import Page from "../../components/ui/Page/Page";
import Toolbar from "../../components/ui/Toolbar/Toolbar";

export default function Explorer() {
  return (
    <Page
      title="Maç Gezgini"
      subtitle="Canlı ve geçmiş maç verilerini görüntüleyin"
    >
      <Toolbar>
        <input
          type="text"
          placeholder="Maç ara..."
        />

        <select defaultValue="">
          <option value="">Tüm Ligler</option>
        </select>

        <select defaultValue="">
          <option value="">Tüm Marketler</option>
        </select>

        <button>Yenile</button>
      </Toolbar>

      <div className="grid-placeholder">
        AG Grid
      </div>

      <div className="explorer-footer">
        <span>Aktif Filtre: 0</span>

        <span>Sonuç: 0</span>
      </div>
    </Page>
  );
}