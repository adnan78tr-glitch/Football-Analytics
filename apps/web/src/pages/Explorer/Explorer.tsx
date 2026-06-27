import "./Explorer.css";

import { Search, RotateCw, Filter } from "lucide-react";
import type { ColDef } from "ag-grid-community";

import Page from "../../components/ui/Page/Page";
import Toolbar from "../../components/ui/Toolbar/Toolbar";
import Grid from "../../components/Grid/Grid";

import TeamCell from "../../components/Grid/cells/TeamCell";
import ScoreCell from "../../components/Grid/cells/ScoreCell";

import { useFixtures } from "../../hooks/useFixtures";
import type { Fixture } from "../../models/Fixture";

const columnDefs: ColDef<Fixture>[] = [
  {
    field: "date",
    headerName: "Tarih",
    width: 95,
  },
  {
    field: "league",
    headerName: "Lig",
    width: 180,
  },
  {
    field: "home",
    headerName: "Ev Sahibi",
    flex: 1,
    minWidth: 220,
    cellRenderer: TeamCell,
  },
  {
    field: "away",
    headerName: "Deplasman",
    flex: 1,
    minWidth: 220,
    cellRenderer: TeamCell,
  },
  {
    field: "score",
    headerName: "Skor",
    width: 110,
    cellRenderer: ScoreCell,
  },
  {
    field: "minute",
    headerName: "Dakika",
    width: 95,
    cellStyle: {
      textAlign: "center",
      fontWeight: "bold",
    },
  },
];

export default function Explorer() {
  const { fixtures, loading } = useFixtures();

  return (
    <Page
      title="Maç Gezgini"
      subtitle="Canlı ve geçmiş maç verilerini görüntüleyin"
    >
      <Toolbar>
        <div className="toolbar-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Maç ara..."
          />
        </div>

        <select defaultValue="">
          <option value="">Tüm Ligler</option>
        </select>

        <select defaultValue="">
          <option value="">Tüm Marketler</option>
        </select>

        <button>
          <Filter size={16} />
          Filtrele
        </button>

        <button>
          <RotateCw size={16} />
          Yenile
        </button>
      </Toolbar>

      {loading ? (
        <div className="grid-placeholder">
          Maçlar yükleniyor...
        </div>
      ) : (
        <Grid
          rowData={fixtures}
          columnDefs={columnDefs}
        />
      )}

      <div className="explorer-footer">
        <span>Toplam Maç : {fixtures.length}</span>

        <span>Filtre : 0</span>

        <span>Seçili : 0</span>
      </div>
    </Page>
  );
}