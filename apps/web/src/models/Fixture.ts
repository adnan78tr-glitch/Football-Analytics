export interface Fixture {
  id: number;

  date: string;

  league: string;
  leagueLogo: string;

  home: string;
  homeLogo: string;

  away: string;
  awayLogo: string;

  score: string;

  minute: number;

  status: "LIVE" | "HT" | "FT";
}