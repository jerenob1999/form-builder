"use client";

import { Button } from "@/modules/core/components/button";
import React from "react";

function NewFormFooter() {
  return (
    <div className="mt-4 flex w-full justify-end">
      <Button className="h-8 mr-1" type="submit" variant="default">
        Send Form
      </Button>
    </div>
  );
}

export default NewFormFooter;
