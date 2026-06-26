export type MatchStatus =
  | "NS"
  | "LIVE"
  | "HT"
  | "FT"
  | "AET"
  | "PEN"
  | "POSTPONED"
  | "CANCELLED";

export interface MarketOdds {
  home?: number;
  draw?: number;
  away?: number;

  over25?: number;
  under25?: number;

  bttsYes?: number;
  bttsNo?: number;
}

export interface Fixture {
  id: number;

  date: string;
  time: string;

  status: MatchStatus;
  minute?: number;

  country: string;
  league: string;

  homeTeam: string;
  awayTeam: string;

  homeLogo: string;
  awayLogo: string;

  homeScore: number;
  awayScore: number;

  odds: MarketOdds;
}