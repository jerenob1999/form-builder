"use client";

import { Button } from "@/modules/core/components/button";
import { useNewFormStore } from "@/modules/core/lib/store";
import { Input } from "@/types/input";
import {
  Type,
  Mail,
  Hash,
  Calendar,
  Phone,
  SquareCheck,
  Baseline,
  ChevronsLeftRightEllipsis,
} from "lucide-react";
import { ReactNode } from "react";

interface InputButton extends Input {
  icon: ReactNode;
}

const inputs: InputButton[] = [
  { type: "checkbox", label: "Checkbox", icon: <SquareCheck size={18} /> },
  { type: "date", label: "Date", icon: <Calendar size={18} /> },
  { type: "email", label: "Email", icon: <Mail size={18} /> },
  { type: "number", label: "Number", icon: <Hash size={18} /> },
  {
    type: "range",
    label: "Range",
    icon: <ChevronsLeftRightEllipsis size={18} />,
  },
  { type: "tel", label: "Telephone", icon: <Phone size={18} /> },
  { type: "text", label: "Text", icon: <Baseline size={18} /> },
];

export function Sidebar() {
  const { setSelectedInput } = useNewFormStore((state) => state);

  return (
    <aside className="w-[400px] max-w-xl h-screen fixed right-0 border-l top-0 z-40 ">
      <div className="h-full px-3 py-4">
        <h3 className="mx-3 text-lg font-semibold text-foreground">
          Add new Input
        </h3>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            {inputs.map((input) => (
              <Button
                variant={"outline"}
                key={input.type}
                className="flex justify-between p-8 text-base"
                onClick={() => setSelectedInput(input)}
              >
                {input.label} {input.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
