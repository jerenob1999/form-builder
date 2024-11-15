import React from "react";
import { buttonVariants } from "@/modules/core/components/button";
import Link from "next/link";

function LandingButtons() {
  return (
    <div>
      <Link className={buttonVariants({ variant: "outline" })} href="/new-form">
        Try Demo
      </Link>
      <Link className={buttonVariants({ variant: "outline" })} href="/login">
        Login
      </Link>
    </div>
  );
}

export default LandingButtons;
