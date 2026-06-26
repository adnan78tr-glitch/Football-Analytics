import "./Explorer.css";

import type { ColDef } from "ag-grid-community";

import Page from "../../components/ui/Page/Page";
import Toolbar from "../../components/ui/Toolbar/Toolbar";
import Grid from "../../components/Grid/Grid";

import { fixtures } from "../../mock/fixtures";

const columnDefs: ColDef[] = [
  {
    field: "date",
    headerName: "Tarih",
    maxWidth: 100,
  },
  {
    field: "league",
    headerName: "Lig",
    minWidth: 180,
  },
  {
    field: "home",
    headerName: "Ev Sahibi",
    minWidth: 180,
  },
  {
    field: "away",
    headerName: "Deplasman",
    minWidth: 180,
  },
  {
    field: "score",
    headerName: "Skor",
    maxWidth: 100,
  },
  {
    field: "minute",
    headerName: "Dakika",
    maxWidth: 110,
  },
];

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

      <Grid
        rowData={fixtures}
        columnDefs={columnDefs}
      />

      <div className="explorer-footer">
        <span>Aktif Filtre: 0</span>

        <span>Toplam Maç: {fixtures.length}</span>
      </div>
    </Page>
  );
}