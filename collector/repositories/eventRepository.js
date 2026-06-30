import pool from "../config/database.js";

export async function saveEvents(
  fixture,
  events,
  captureTime = new Date()
) {
  if (!events.length) {
    return;
  }

  const sql = `
    INSERT INTO match_events
    (
      fixture_id,
      nesine_id,
      capture_time,
      minute,
      event_type,
      event_key,
      team_side,
      market_type_id,
      selection_id,
      old_value,
      new_value
    )
    VALUES
    (
      ?,?,?,?,?,?,?,?,?,?,?
    )
  `;

  const connection = await pool.getConnection();

  try {

    await connection.beginTransaction();

    for (const event of events) {

      await connection.execute(sql, [

        fixture.fixture_id,
        fixture.nesine_id,

        captureTime,

        fixture.minute ?? null,

        event.event_type ?? null,
        event.event_key ?? null,

        event.team_side ?? "MATCH",

        event.market_type_id ?? null,
        event.selection_id ?? null,

        event.old_value ?? null,
        event.new_value ?? null

      ]);

    }

    await connection.commit();

  } catch (error) {

    await connection.rollback();
    throw error;

  } finally {

    connection.release();

  }
}