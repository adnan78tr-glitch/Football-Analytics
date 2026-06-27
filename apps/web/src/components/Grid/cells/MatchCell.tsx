throw new Error("MATCH CELL");
import "./MatchCell.css";

import type { CustomCellRendererProps } from "ag-grid-react";

export default function MatchCell(
  props: CustomCellRendererProps
) {
  const home = String(props.data?.home ?? "");
  const away = String(props.data?.away ?? "");

  return (
    <div className="match-cell">
      <div className="match-team">
        <div className="match-logo">
          {home.charAt(0)}
        </div>

        <span>{home}</span>
      </div>

      <div className="match-divider" />

      <div className="match-team">
        <div className="match-logo">
          {away.charAt(0)}
        </div>

        <span>{away}</span>
      </div>
    </div>
  );
}