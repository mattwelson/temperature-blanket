import { describe, expect, it } from "vitest";
import { getTemperatureForLocationAndYear } from "./temperature";

describe("getTemperatureForLocationAndYear", () => {
  // This test was just to run the fetch
  it.skip("fetch temp", async () => {
    expect(
      await getTemperatureForLocationAndYear({
        lat: 51.5085,
        long: -0.1257,
        year: 2023,
      })
    ).toEqual([]);
  });
});
