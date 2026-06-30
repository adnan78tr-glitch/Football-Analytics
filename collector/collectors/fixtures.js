export default async function fetchLiveFixtures() {

  const today = new Date();

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const urls = [
    `https://vd.mackolik.com/livedata?date=${formatDate(today)}`,
    `https://vd.mackolik.com/livedata?date=${formatDate(yesterday)}`
  ];

  const results = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.json();
    })
  );

  const allMatches = results.flatMap(
    data => data?.m || []
  );

  const uniqueMatches = [
    ...new Map(
      allMatches.map(match => [
        Number(match[0]),
        match
      ])
    ).values()
  ];

  const footballMatches = uniqueMatches.filter(
    match =>
      match?.[23] === 1 &&
      [1, 2, 3, 6].includes(Number(match?.[5]))
  );

  return footballMatches
    .filter(match => match?.[14])
    .map(match => ({
      fixture_id: Number(match[0]),
      nesine_id: Number(match[14]),

      minute: /^\d+$/.test(String(match[6] ?? ""))
        ? Number(match[6])
        : null,

      home_team: match[2] ?? "",
      away_team: match[4] ?? "",

      match_status: Number(match[5]),
      match_timer: String(match[6] ?? ""),

      home_score: Number(match[29] ?? 0),
      away_score: Number(match[30] ?? 0),

      ht_home_score: Number(match[31] ?? 0),
      ht_away_score: Number(match[32] ?? 0),

      home_yellow_cards: Number(match[15]?.h1 ?? 0),
      away_yellow_cards: Number(match[15]?.h2 ?? 0),

      home_red_cards: Number(match[15]?.k1 ?? 0),
      away_red_cards: Number(match[15]?.k2 ?? 0),

      raw: match
    }));
}