import type { Fixture } from "../models/Fixture";
import { fixtures } from "../mock/fixtures";

export async function getFixtures(): Promise<Fixture[]> {
  return Promise.resolve(fixtures);
}