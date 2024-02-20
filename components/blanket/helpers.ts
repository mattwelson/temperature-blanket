import { defaultTheme, getTemperatureColour } from "@/lib/theme";

export function temperaturesToColours(temperatures: number[], theme: typeof defaultTheme){
    return temperatures.map(t => getTemperatureColour(t, theme))
} 