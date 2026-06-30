export default async function fetchMarkets(nesineId) {
  const url =
    `https://arsiv.mackolik.com/AjaxHandlers/IddaaHandler.aspx?command=oddspopup&e=${nesineId}&s=futbol`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();

  const match = data?.data?.matches?.[0];

  if (!match) {
    return [];
  }

  const nesineBookie =
    match.bookies?.find(x => x.id === 14);

  if (!nesineBookie) {
    return [];
  }



  const odds = [];

  const allMarkets = [
    ...(nesineBookie.live_markets || [])
  ];

  for (const market of allMarkets) {
  for (const outcome of (market.outcomes || [])) {

  
    odds.push({
  market_type_id: outcome.market_type_id,

  market_name: market.name,

  selection_id: outcome.selection_id,
  selection_name: outcome.name,

  key: outcome.key,
  sov: market.sov,

  odd: outcome.value,

  is_live: 1
});
  }
}

return odds;
}