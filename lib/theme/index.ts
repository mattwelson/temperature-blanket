import { defaultTheme } from "./default";

export * from "./default";

// Increment until the next colour would be smaller than the temperature
export function getTemperatureColour(
  temperature: number,
  theme = defaultTheme
) {
  // largest temperature is infinity so shouldn't be undefined
  return theme.filter(({ max }) => temperature <= max).at(0)!.colour;
}
