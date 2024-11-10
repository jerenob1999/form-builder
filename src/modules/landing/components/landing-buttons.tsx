import React from "react";
import { buttonVariants } from "@/modules/core/components/button";
import Link from "next/link";

function LandingButtons() {
  return (
    <div>
      <Link className={buttonVariants({ variant: "outline" })} href="/new-form">
        Demo
      </Link>
      <Link href="/new-form"></Link>
    </div>
  );
}

export default LandingButtons;
