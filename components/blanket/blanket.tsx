import { useMemo } from "react";
import { temperaturesToColours } from "./helpers";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { defaultTheme } from "@/lib/theme";

export function Blanket({
  temperatures,
  dates,
}: {
  temperatures: number[];
  dates: string[];
}) {
  console.log({ dates });
  const theme = defaultTheme
  const colours = useMemo(
    () => temperaturesToColours(temperatures, theme),
    [temperatures, theme]
  );
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col sm:flex-row w-full">
        {colours.map((c, i) => (
          <Tooltip key={`${c}-${i}`}>
            <TooltipTrigger asChild>
              <div className="flex-1" style={{ backgroundColor: c }} />
            </TooltipTrigger>
            <TooltipContent>
              <p>{dates[i]}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
