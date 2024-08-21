"use client";

import { Button } from "@/modules/core/components/button";
import { useNewFormStore } from "@/modules/core/lib/store";
import NewInput from "@/modules/new-form/components/new-input";
import { Separator } from "@/modules/core/components/separator";

export function Sidebar() {
  const { setSelectedInput } = useNewFormStore((state) => state);

  return (
    <aside className="w-[400px] max-w-xl h-screen border-l ">
      <div className="h-full px-3 py-4">
        <div className="mt-5">
          <h3 className="mb-4 text-xl font-semibold text-foreground">
            Field Form
          </h3>
          <NewInput />
        </div>
      </div>
    </aside>
  );
}
