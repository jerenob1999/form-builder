"use client";

import { Button } from "@/modules/core/components/button";
import { useNewFormStore } from "@/modules/core/lib/store";
import InputForm from "@/modules/new-form/components/input-form";
import { Separator } from "@/modules/core/components/separator";

export function Sidebar() {
  const { setNewInput } = useNewFormStore((state) => state);

  return (
    <aside className="w-[400px] max-w-xl h-screen border-l ">
      <div className="h-full px-3 py-4">
        <div className="mt-5">
          <h3 className="mb-4 text-xl font-semibold text-foreground">
            Field Form
          </h3>
          <InputForm
            onSubmit={(state) => setNewInput(state)}
            actionButtons={
              <>
                <Button
                  form="hook-form"
                  className="h-8 mr-1 w-full"
                  type="submit"
                  variant="outline"
                >
                  Add field
                </Button>
                <Button className="h-8 w-full" variant="destructive">
                  Remove
                </Button>
              </>
            }
          />
          <Separator className="my-4" />
        </div>
      </div>
    </aside>
  );
}
