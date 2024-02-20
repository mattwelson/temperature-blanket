import { describe, expect, it } from "vitest";
import { getTemperatureColour } from ".";

describe("getTemperatureColour", () => {
  it("works with simple temperature", () => {
    expect(getTemperatureColour(19)).toEqual("#65a30d");
  });

  it("works with very cold temperature", () => {
    expect(getTemperatureColour(-20)).toEqual("#ffffff");
  });

  it("works with very hot temperature", () => {
    expect(getTemperatureColour(120)).toEqual("#b91c1c");
  });

  it("works with exactly equal temperature", () => {
    expect(getTemperatureColour(20)).toEqual("#65a30d");
  });
});
