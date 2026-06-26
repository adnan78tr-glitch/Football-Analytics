import { useEffect, useState } from "react";

import type { Fixture } from "../models/Fixture";
import { getFixtures } from "../services/fixtureService";

export function useFixtures() {
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getFixtures();

      setFixtures(data);
      setLoading(false);
    };

    load();
  }, []);

  return {
    fixtures,
    loading,
  };
}