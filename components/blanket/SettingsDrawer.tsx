import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import { suggested } from "@/lib/temperature/suggested";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SettingsDrawer({
  active,
}: {
  active: { lat: number; long: number };
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="absolute bottom-8">Change</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <h2 className="text-lg font-bold font-serif">Suggested Cities</h2>
          <div className="flex gap-4 overflow-x-auto">
            {suggested.map((city) => {
              const isActive =
                city.lat === active.lat && city.long === active.long;
              console.log({ city, isActive, active });
              return (
                <Link
                  key={city.name}
                  href={`/blanket/${city.lat}/${city.long}/${city.year}`}
                  className={cn(
                    "flex flex-col justify-center items-center shrink-0 w-36 h-20 border-2 rounded hover:border-slate-800",
                    {
                      "border-slate-700": isActive,
                    }
                  )}
                >
                  <h2 className="text-lg font-bold">{city.name}</h2>
                  <h3>{city.year}</h3>
                </Link>
              );
            })}
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
