import "./ScoreCell.css";

import type { CustomCellRendererProps } from "ag-grid-react";

export default function ScoreCell(
  props: CustomCellRendererProps
) {
  const score = String(props.value ?? "-");

  const [home, away] = score.split("-");

  return (
    <div className="score-cell">
      <span className="score-home">
        {home?.trim()}
      </span>

      <span className="score-divider">
        :
      </span>

      <span className="score-away">
        {away?.trim()}
      </span>
    </div>
  );
}