import "./TeamCell.css";

import type { CustomCellRendererProps } from "ag-grid-react";

export default function TeamCell(
  props: CustomCellRendererProps
) {
  const team = String(props.value ?? "");

  return (
    <div className="team-cell">
      <div className="team-logo">
        {team.charAt(0)}
      </div>

      <span className="team-name">
        {team}
      </span>
    </div>
  );
}