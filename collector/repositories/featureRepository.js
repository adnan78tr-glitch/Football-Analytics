import pool from "../config/database.js";

export async function insertFeatureSnapshot(feature) {
  const sql = `
    INSERT INTO snapshot_features
    (
      fixture_id,
      capture_time,

      minute,

      home_score,
      away_score,

      ht_home_score,
      ht_away_score,

      home_yellow_cards,
      away_yellow_cards,

      home_red_cards,
      away_red_cards,

      ms1,
      msx,
      ms2,

      kg_var,
      kg_yok,

      over05,
      under05,

      over15,
      under15,

      over25,
      under25,

      over35,
      under35,

      over45,
      under45,

      next_goal_home,
      next_goal_away,
      next_goal_none,

      double_chance_1x,
      double_chance_12,
      double_chance_x2,

      odd_even_odd,
      odd_even_even,

      first_half_1,
      first_half_x,
      first_half_2,

      second_half_1,
      second_half_x,
      second_half_2
    )
    VALUES
(
  ?,?,?,?,?,?,?,?,?,?,
  ?,?,?,?,?,?,?,?,?,?,
  ?,?,?,?,?,?,?,?,?,?,
  ?,?,?,?,?,?,?,?,?,?
)
  `;

  const values = [

    feature.fixture_id,
    feature.capture_time,

    feature.minute,

    feature.home_score,
    feature.away_score,

    feature.ht_home_score,
    feature.ht_away_score,

    feature.home_yellow_cards,
    feature.away_yellow_cards,

    feature.home_red_cards,
    feature.away_red_cards,

    feature.ms1,
    feature.msx,
    feature.ms2,

    feature.kg_var,
    feature.kg_yok,

    feature.over05,
    feature.under05,

    feature.over15,
    feature.under15,

    feature.over25,
    feature.under25,

    feature.over35,
    feature.under35,

    feature.over45,
    feature.under45,

    feature.next_goal_home,
    feature.next_goal_away,
    feature.next_goal_none,

    feature.double_chance_1x,
    feature.double_chance_12,
    feature.double_chance_x2,

    feature.odd_even_odd,
    feature.odd_even_even,

    feature.first_half_1,
    feature.first_half_x,
    feature.first_half_2,

    feature.second_half_1,
    feature.second_half_x,
    feature.second_half_2

  ];

  const [result] = await pool.execute(sql, values);

  return result.insertId;
}