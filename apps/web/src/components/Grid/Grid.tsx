import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "./Grid.css";

type GridProps<T = unknown> = {
  rowData: T[];
  columnDefs: ColDef<T>[];
};

export default function Grid<T = unknown>({
  rowData,
  columnDefs,
}: GridProps<T>) {
  return (
    <div
      className="ag-theme-quartz-dark football-grid"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "600px",
      }}
    >
      <AgGridReact<T>
        theme="legacy"
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{
          flex: 1,
          minWidth: 120,
          sortable: true,
          filter: true,
          resizable: true,
        }}
      />
    </div>
  );
}