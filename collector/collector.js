import pLimit from "p-limit";

import fetchLiveFixtures from "./collectors/fixtures.js";
import fetchMarkets from "./collectors/markets.js";

import {
  saveFixture,
  saveMarkets,
  saveFeature
} from "./processors/snapshot.js";

import {
  detectFixtureEvents
} from "./processors/eventProcessor.js";

import {
  getPreviousFixtureSnapshot
} from "./repositories/fixtureRepository.js";

import {
  saveEvents
} from "./repositories/eventRepository.js";

const limit = pLimit(10);

async function processFixture(fixture) {
  try {

    const previousSnapshot =
      await getPreviousFixtureSnapshot(
        fixture.fixture_id
      );

    const markets =
      await fetchMarkets(
        fixture.nesine_id
      );

    if (!markets.length) {

      console.log(
        `[NO MARKET] ${fixture.home_team} - ${fixture.away_team}`
      );

      return;
    }

    const snapshot =
      await saveFixture(
        fixture
      );

    await saveMarkets(
      fixture,
      snapshot.captureTime,
      markets
    );

    const events =
      detectFixtureEvents(
        previousSnapshot,
        fixture
      );

    if (events.length) {

      await saveEvents(
  fixture,
  events,
  snapshot.captureTime
);

    }

    //await saveFeature(
      //fixture,
      //snapshot.captureTime,
      //markets
    //);

    console.log(
      `✓ ${fixture.home_team} - ${fixture.away_team} | ${markets.length} market | ${events.length} event`
    );

  } catch (err) {

    console.log("");

    console.log(
      "======================================"
    );

    console.log(
      fixture.home_team,
      "-",
      fixture.away_team
    );

    console.log(err);

    console.log(
      "======================================"
    );

  }
}

async function runCollector() {

  const started = Date.now();

  const fixtures =
    await fetchLiveFixtures();

  console.log("");

  console.log(
    "======================================"
  );

  console.log(
    `Fixture : ${fixtures.length}`
  );

  console.log(
    "======================================"
  );

  await Promise.all(

    fixtures.map(fixture =>

      limit(() =>

        processFixture(
          fixture
        )

      )

    )

  );

  console.log("");

  console.log(
    "======================================"
  );

  console.log(
    `Finished : ${(
      (Date.now() - started) /
      1000
    ).toFixed(2)} sec`
  );

  console.log(
    "======================================"
  );

}

runCollector().catch(console.error);