import type { Fixture } from "../models/Fixture";

interface ApiResponse {
  success: boolean;
  count: number;
  data: {
    fixture_id: number;
    nesine_id: number;
    capture_time: string;
    minute: number | null;
    home_team: string;
    away_team: string;
    home_score: number;
    away_score: number;
    match_status: number;
    match_timer: string;
  }[];
}

export async function getFixtures(): Promise<Fixture[]> {
  const response = await fetch("http://localhost:3001/api/live/fixtures");

  if (!response.ok) {
    throw new Error("Canlı maçlar alınamadı.");
  }

  const json: ApiResponse = await response.json();

  return json.data.map((item) => ({
    id: item.fixture_id,
    date: new Date(item.capture_time).toLocaleDateString("tr-TR"),
    league: "",
    home: item.home_team,
    away: item.away_team,
    score: `${item.home_score}-${item.away_score}`,
    minute: item.match_timer ?? (item.minute?.toString() ?? "")
  }));
}