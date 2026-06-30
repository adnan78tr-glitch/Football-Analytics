import { insertFixtureSnapshot } from "../repositories/fixtureSnapshotRepository.js";
import { insertMarketSnapshots } from "../repositories/marketSnapshotRepository.js";

import { buildFeatures } from "./featureProcessor.js";

export async function saveFixture(fixture) {
  return insertFixtureSnapshot(fixture);
}

export async function saveMarkets(
  fixture,
  captureTime,
  markets
) {
  return insertMarketSnapshots(
    fixture,
    captureTime,
    markets
  );
}

export async function saveFeature(
  fixture,
  captureTime,
  markets
) {
  return buildFeatures(
    fixture,
    captureTime,
    markets
  );
}