import fetchLiveFixtures from "../collectors/fixtures.js";
import fetchMarkets from "../collectors/markets.js";

import {
  saveFixture,
  saveMarkets,
  saveFeature
} from "../processors/snapshot.js";

import {
  detectFixtureEvents
} from "../processors/eventProcessor.js";

import {
  getPreviousFixtureSnapshot
} from "../repositories/fixtureRepository.js";

import {
  saveEvents
} from "../repositories/eventRepository.js";

import pLimit from "p-limit";

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

      return false;
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
        events
      );

    }

    await saveFeature(
      fixture,
      snapshot.captureTime,
      markets
    );

    console.log(
      `✓ ${fixture.home_team} - ${fixture.away_team} | Market:${markets.length} | Event:${events.length}`
    );

    return true;

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

    console.error(err);

    console.log(
      "======================================"
    );

    return false;

  }
}

export async function runCollector() {

  const started = Date.now();

  const fixtures =
    await fetchLiveFixtures();

  console.log("");
  console.log("======================================");
  console.log(`Fixture : ${fixtures.length}`);
  console.log("======================================");

  const results =
    await Promise.all(

      fixtures.map(fixture =>

        limit(() =>

          processFixture(
            fixture
          )

        )

      )

    );

  const success =
    results.filter(Boolean).length;

  console.log("");
  console.log("======================================");
  console.log(`Success : ${success}`);
  console.log(`Failed  : ${fixtures.length-success}`);
  console.log(`Duration: ${((Date.now()-started)/1000).toFixed(2)} sec`);
  console.log("======================================");
}