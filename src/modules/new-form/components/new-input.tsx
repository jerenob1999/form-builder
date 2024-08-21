"use client";

import React from "react";
import { Input } from "@/modules/core/components/input";
import { useNewFormStore } from "@/modules/core/lib/store";
import { Button } from "@/modules/core/components/button";
import { Separator } from "@/modules/core/components/separator";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Switch } from "@/modules/core/components/switch";
import {
  Mail,
  Hash,
  Calendar,
  Phone,
  SquareCheck,
  Baseline,
  ChevronsLeftRightEllipsis,
} from "lucide-react";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/modules/core/components/select";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormDescription,
  FormMessage,
} from "@/modules/core/components/form";

const NewInputSchema = z.object({
  required: z.boolean(),
  label: z.string(),
  placeholder: z.string(),
  helperText: z.string(),
  type: z.string(),
});

const defaultValues = {
  required: false,
  label: "",
  placeholder: "",
  helperText: "",
  type: "text",
};

const inputs = [
  { type: "checkbox", label: "Checkbox", icon: SquareCheck },
  { type: "date", label: "Date", icon: Calendar },
  { type: "email", label: "Email", icon: Mail },
  { type: "number", label: "Number", icon: Hash },
  {
    type: "range",
    label: "Range",
    icon: ChevronsLeftRightEllipsis,
  },
  { type: "tel", label: "Telephone", icon: Phone },
  { type: "text", label: "Text", icon: Baseline },
];

function NewInput() {
  const form = useForm({ defaultValues });
  const { selectedInput } = useNewFormStore((state) => state);

  if (!selectedInput) return;

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title Label</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="placeholder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Placeholder</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="helperText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Helper text</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {inputs.map((input) => (
                    <SelectItem key={input.type} value={input.type}>
                      <div className="flex items-center">
                        <input.icon className="mr-2 h-4 w-4" />
                        {input.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center">
              <FormLabel className="mr-4 mt-2 flex flex-col space-y-1">
                Required
              </FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
      <div className="mt-4 flex justify-center">
        <Button className="h-8 mr-1 w-full" variant="outline">
          Submit
        </Button>
        <Button className="h-8 w-full" variant="destructive">
          Delete
        </Button>
      </div>
      <Separator className="my-4" />
    </Form>
  );
}

export default NewInput;
