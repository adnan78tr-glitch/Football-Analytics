import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  AllCommunityModule,
  type ColDef,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([
  AllCommunityModule,
]);

type Props<T> = {
  rowData: T[];
  columnDefs: ColDef<T>[];
};

export default function Grid<T>({
  rowData,
  columnDefs,
}: Props<T>) {
  return (
    <div
      className="ag-theme-quartz"
      style={{
        width: "100%",
        height: 600,
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
}