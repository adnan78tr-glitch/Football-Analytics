import { fetchLiveFixtures } from "../services/fixtureService.js";

export async function getLiveFixtures(req, res) {
  try {
    const fixtures = await fetchLiveFixtures();

    res.json({
      success: true,
      count: fixtures.length,
      data: fixtures
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}