// get the temperature from API

import { Blanket, SettingsDrawer } from "@/components/blanket";
import { getTemperatureForLocationAndYear } from "@/lib/temperature/temperature";

// render a component that will show all the temperature
export default async function BlanketPage({
  params: { lat, long, year },
}: {
  params: {
    lat: string;
    long: string;
    year?: string;
  };
}) {
  // get the params for lat and long and year
  const temps = await getTemperatureForLocationAndYear({
    lat: parseFloat(lat),
    long: parseFloat(long),
    year: parseInt(year ?? "2023", 10),
  });

  return (
    <main className="flex min-h-screen flex-col items-center relative">
        <Blanket
          temperatures={temps.daily.temperature_2m_max}
          dates={temps.daily.time}
        />
        <SettingsDrawer
          active={{ lat: parseFloat(lat), long: parseFloat(long) }}
        />
    </main>
  );
}
