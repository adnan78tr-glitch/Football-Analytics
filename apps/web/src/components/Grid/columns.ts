throw new Error("COLUMNS FILE LOADED");
import type { ColDef } from "ag-grid-community";

import type { Fixture } from "../../models/Fixture";

import LeagueCell from "./cells/LeagueCell";
import MatchCell from "./cells/MatchCell";

export const columnDefs: ColDef<Fixture>[] = [
  {
    field: "date",
    headerName: "Tarih",
    width: 95,
  },

  {
    field: "league",
    headerName: "Lig",
    width: 190,
    cellRenderer: LeagueCell,
  },

  {
    headerName: "Maç",
    flex: 1.8,
    minWidth: 360,
    cellRenderer: MatchCell,
    sortable: false,
    filter: false,
  },

  {
    field: "score",
    headerName: "Skor",
    width: 90,
    cellStyle: {
      textAlign: "center",
      fontWeight: "bold",
    },
  },

  {
    field: "minute",
    headerName: "Dakika",
    width: 90,
    cellStyle: {
      textAlign: "center",
    },
  },
];