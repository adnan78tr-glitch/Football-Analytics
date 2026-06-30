import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  AllCommunityModule,
  type ColDef,
} from "ag-grid-community";
import AG_GRID_LOCALE_TR from "../../locales/agGridTr";

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
  return (
    <div
      className="ag-theme-quartz-dark football-grid"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <AgGridReact<T>
        theme="legacy"
        rowData={rowData}
        columnDefs={columnDefs}
        localeText={AG_GRID_LOCALE_TR}
        animateRows
        rowSelection={{
          mode: "singleRow",
        }}
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