import pool from "../config/database.js";

export async function insertMarketSnapshots(
  fixture,
  captureTime,
  markets
) {
  if (!markets || markets.length === 0) {
    return 0;
  }

  const sql = `
    INSERT INTO live_market_snapshots
    (
      fixture_id,
      nesine_id,
      capture_time,

      market_type_id,
      market_name,

      selection_id,
      selection_name,

      market_key,
      sov,

      odd,

      is_live
    )
    VALUES ?
  `;

  const rows = markets.map((market) => [
    fixture.fixture_id,
    fixture.nesine_id,
    captureTime,

    market.market_type_id,
    market.market_name,

    market.selection_id,
    market.selection_name,

    market.key ?? null,
    market.sov ?? null,

    market.odd === "-" ||
    market.odd === null ||
    market.odd === undefined
      ? null
      : Number(market.odd),

    market.is_live ?? 1
  ]);

  await pool.query(sql, [rows]);

  return rows.length;
}