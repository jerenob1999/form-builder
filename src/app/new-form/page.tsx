import React from "react";
import { Sidebar } from "@/modules/new-form/components/sidebar";
import NewForm from "@/modules/new-form/components/new-form";

function page() {
  return (
    <div className="flex">
      <div className="w-full flex justify-center items-center">
        <NewForm />
      </div>
      <Sidebar />
    </div>
  );
}

export default page;
