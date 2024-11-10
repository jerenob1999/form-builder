"use client";

import React from "react";
import { useNewFormStore } from "@/modules/lib/store";
import { Input } from "@/modules/core/components/input";
import { Label } from "@/modules/core/components/label";
import { Button } from "@/modules/core/components/button";
import { Pencil, Trash2 } from "lucide-react";
import { Input as InputType } from "@/types/input";

interface Props {
  input: InputType;
}

function AddedInputForm({ input }: Props) {
  const { setSelectedInput, removeInput } = useNewFormStore((state) => state);

  return (
    <div className="grid grid-cols-2 w-full items-center gap-4 m-2 p-4 rounded-lg border">
      <div className="">
        <Label aria-required htmlFor="email">
          {input.label}{" "}
          {input.required ? <span className="text-destructive">*</span> : null}
        </Label>
        <Input
          className="max-w-lg"
          type={input.type}
          required={input.required}
          readOnly
          id="email"
          placeholder={input.placeholder}
        />
      </div>
      <div className="flex justify-end items-center">
        <Button
          className="rounded-full size-12"
          onClick={() => setSelectedInput(input)}
          variant={"ghost"}
        >
          <Pencil />
        </Button>
        <Button
          onClick={() => removeInput(input.id)}
          className="rounded-full size-12"
          variant={"ghost"}
        >
          <Trash2 className="text-destructive" />
        </Button>
      </div>
    </div>
  );
}

export default AddedInputForm;
