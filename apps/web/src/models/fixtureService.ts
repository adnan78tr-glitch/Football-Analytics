import { fixtures } from "../mock/fixtures";
import type { Fixture } from "../models/Fixture";

export async function getFixtures(): Promise<Fixture[]> {
  return Promise.resolve(fixtures);
}