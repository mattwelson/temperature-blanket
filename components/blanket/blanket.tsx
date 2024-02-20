import { useMemo } from "react";
import { temperaturesToColours } from "./helpers";

export function Blanket({temperatures}: {temperatures:number[]}){
const colours = useMemo(() => temperaturesToColours(temperatures), [temperatures])
return <div className="min-h-screen flex w-full">
    {colours.map((c, i) => <div className="flex-1" style={{backgroundColor: c}} key={`${c}-${i}`} />)}
</div>
}