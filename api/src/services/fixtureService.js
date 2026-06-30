import pool from "../config/database.js";

export async function fetchLiveFixtures() {
  const sql = `
    SELECT
        f.fixture_id,
        f.nesine_id,
        f.capture_time,
        f.minute,
        f.home_team,
        f.away_team,
        f.home_score,
        f.away_score,
        f.match_status,
        f.match_timer
    FROM live_fixture_snapshots f
    INNER JOIN
    (
        SELECT
            fixture_id,
            MAX(capture_time) AS capture_time
        FROM live_fixture_snapshots
        GROUP BY fixture_id
    ) x
        ON x.fixture_id = f.fixture_id
       AND x.capture_time = f.capture_time
    ORDER BY
        f.capture_time DESC,
        f.minute DESC;
  `;

  const [rows] = await pool.query(sql);

  return rows;
}