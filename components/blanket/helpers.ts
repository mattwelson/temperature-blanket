import { getTemperatureColour } from "@/lib/theme";

export function temperaturesToColours(temperatures: number[]){
    return temperatures.map(t => getTemperatureColour(t))
} 