import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/modules/core/components/card";
import InputsContainer from "@/modules/new-form/components/inputs-container";
import NewFormFooter from "@/modules/new-form/components/new-form-footer";

function NewForm() {
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>New Form</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="min-h-[500px]">
        <InputsContainer />
      </CardContent>
      <CardFooter>
        <NewFormFooter />
      </CardFooter>
    </Card>
  );
}

export default NewForm;
