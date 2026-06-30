import pool from "../config/database.js";

export async function getPreviousFixtureSnapshot(fixtureId) {
  const [rows] = await pool.query(
    `
    SELECT
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

    FROM live_fixture_snapshots

    WHERE fixture_id = ?

    ORDER BY capture_time DESC

    LIMIT 1
    `,
    [fixtureId]
  );

  if (!rows.length) {
    return null;
  }

  return rows[0];
}