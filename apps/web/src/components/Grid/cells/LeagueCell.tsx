import "./LeagueCell.css";

import type { CustomCellRendererProps } from "ag-grid-react";

const FLAGS: Record<string, string> = {
  "Süper Lig": "🇹🇷",
  "Premier League": "🏴",
  "La Liga": "🇪🇸",
  "Serie A": "🇮🇹",
  Bundesliga: "🇩🇪",
};

export default function LeagueCell(
  props: CustomCellRendererProps
) {
  const league = String(props.value ?? "");

  return (
    <div className="league-cell">
      <span className="league-flag">
        {FLAGS[league] ?? "🏆"}
      </span>

      <span className="league-name">
        {league}
      </span>
    </div>
  );
}