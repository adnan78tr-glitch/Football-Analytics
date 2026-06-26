import { AgGridReact } from "ag-grid-react";
import type {
  ColDef,
  GridReadyEvent,
} from "ag-grid-community";

import {
  ModuleRegistry,
  AllCommunityModule,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "./Grid.css";

ModuleRegistry.registerModules([
  AllCommunityModule,
]);

type GridProps<T = unknown> = {
  rowData: T[];
  columnDefs: ColDef<T>[];
};

export default function Grid<T = unknown>({
  rowData,
  columnDefs,
}: GridProps<T>) {
  const onGridReady = (params: GridReadyEvent) => {
    requestAnimationFrame(() => {
      params.api.autoSizeAllColumns();
    });
  };

  return (
    <div className="football-grid ag-theme-quartz">
      <AgGridReact<T>
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
        animateRows
        rowSelection={{
          mode: "singleRow",
        }}
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
