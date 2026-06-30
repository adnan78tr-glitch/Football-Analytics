import pool from "../config/database.js";

export async function insertFixtureSnapshot(fixture) {
  const captureTime = new Date();

  const sql = `
    INSERT INTO live_fixture_snapshots
    (
      fixture_id,
      nesine_id,
      capture_time,

      minute,

      match_status,
      match_timer,

      home_team,
      away_team,

      home_score,
      away_score,

      ht_home_score,
      ht_away_score,

      home_yellow_cards,
      away_yellow_cards,

      home_red_cards,
      away_red_cards
    )
    VALUES
    (
      ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?
    )
  `;

  const params = [
    fixture.fixture_id,
    fixture.nesine_id,
    captureTime,

    fixture.minute ?? null,

    fixture.match_status ?? null,
    fixture.match_timer ?? null,

    fixture.home_team,
    fixture.away_team,

    fixture.home_score ?? 0,
    fixture.away_score ?? 0,

    fixture.ht_home_score ?? 0,
    fixture.ht_away_score ?? 0,

    fixture.home_yellow_cards ?? 0,
    fixture.away_yellow_cards ?? 0,

    fixture.home_red_cards ?? 0,
    fixture.away_red_cards ?? 0
  ];

  const [result] = await pool.execute(sql, params);

  return {
    id: result.insertId,
    captureTime
  };
}