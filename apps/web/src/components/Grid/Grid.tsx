import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

type Props = {
    rowData: unknown[];
    columnDefs: ColDef[];
};

export default function Grid({ rowData, columnDefs }: Props) {
    return (
        <div
            className="ag-theme-quartz-dark"
            style={{ width: "100%", height: "100%" }}
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                animateRows
            />
        </div>
    );
}