"use client";

import React from "react";
import { useNewFormStore } from "@/modules/core/lib/store";
import AddedInputForm from "@/modules/new-form/components/added-input-form";

function InputsContainer() {
  const { inputs } = useNewFormStore((state) => state);

  return inputs.map((input) => (
    <AddedInputForm
      key={input.label + input.type}
      input={input}
    ></AddedInputForm>
  ));
}

export default InputsContainer;
