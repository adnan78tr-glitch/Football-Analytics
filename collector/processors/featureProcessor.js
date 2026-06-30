import { insertFeatureSnapshot } from "../repositories/featureRepository.js";

function getOdd(markets, marketName, selection) {
  const market = markets.find(
    (m) =>
      m.market_name === marketName &&
      (
        m.selection_name === selection ||
        m.key === selection ||
        m.market_key === selection ||
        m.sov === selection
      )
  );

  if (!market) {
    return null;
  }

  if (
    market.odd === null ||
    market.odd === undefined ||
    market.odd === "-"
  ) {
    return null;
  }

  return Number(market.odd);
}

export async function buildFeatures(
  fixture,
  captureTime,
  markets
) {

  const feature = {

    fixture_id: fixture.fixture_id,
    capture_time: captureTime,

    minute: fixture.minute,

    home_score: fixture.home_score,
    away_score: fixture.away_score,

    ht_home_score: fixture.ht_home_score,
    ht_away_score: fixture.ht_away_score,

    home_yellow_cards: fixture.home_yellow_cards,
    away_yellow_cards: fixture.away_yellow_cards,

    home_red_cards: fixture.home_red_cards,
    away_red_cards: fixture.away_red_cards,

    ms1: getOdd(markets, "Maç Sonucu", "1"),
    msx: getOdd(markets, "Maç Sonucu", "X"),
    ms2: getOdd(markets, "Maç Sonucu", "2"),

    kg_var: getOdd(markets, "Karşılıklı Gol", "Var"),
    kg_yok: getOdd(markets, "Karşılıklı Gol", "Yok"),

    over05: getOdd(markets, "0,5 Alt/Üst", "Üst"),
    under05: getOdd(markets, "0,5 Alt/Üst", "Alt"),

    over15: getOdd(markets, "1,5 Alt/Üst", "Üst"),
    under15: getOdd(markets, "1,5 Alt/Üst", "Alt"),

    over25: getOdd(markets, "2,5 Alt/Üst", "Üst"),
    under25: getOdd(markets, "2,5 Alt/Üst", "Alt"),

    over35: getOdd(markets, "3,5 Alt/Üst", "Üst"),
    under35: getOdd(markets, "3,5 Alt/Üst", "Alt"),

    over45: getOdd(markets, "4,5 Alt/Üst", "Üst"),
    under45: getOdd(markets, "4,5 Alt/Üst", "Alt"),

    next_goal_home: getOdd(markets, "Sıradaki Gol", "1"),
    next_goal_away: getOdd(markets, "Sıradaki Gol", "2"),
    next_goal_none: getOdd(markets, "Sıradaki Gol", "Olmaz"),

    double_chance_1x: getOdd(markets, "Çifte Şans", "1-X"),
    double_chance_12: getOdd(markets, "Çifte Şans", "1-2"),
    double_chance_x2: getOdd(markets, "Çifte Şans", "X-2"),

    odd_even_odd: getOdd(markets, "Tek/Çift", "Tek"),
    odd_even_even: getOdd(markets, "Tek/Çift", "Çift"),

    first_half_1: getOdd(markets, "İlk Yarı Sonucu", "1"),
    first_half_x: getOdd(markets, "İlk Yarı Sonucu", "X"),
    first_half_2: getOdd(markets, "İlk Yarı Sonucu", "2"),

    second_half_1: getOdd(markets, "İkinci Yarı Sonucu", "1"),
    second_half_x: getOdd(markets, "İkinci Yarı Sonucu", "X"),
    second_half_2: getOdd(markets, "İkinci Yarı Sonucu", "2")

  };

  await insertFeatureSnapshot(feature);

  return feature;
}