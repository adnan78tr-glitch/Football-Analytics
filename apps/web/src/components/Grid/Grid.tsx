import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "./Grid.css";

type GridProps = {
  rowData: unknown[];
  columnDefs: ColDef[];
};

export default function Grid({
  rowData,
  columnDefs,
}: GridProps) {
  return (
    <div className="ag-theme-quartz-dark football-grid">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows
        pagination
        paginationPageSize={25}
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
          flex: 1,
          minWidth: 120,
        }}
      />
    </div>
  );
}