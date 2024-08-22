"use client";

import React from "react";
import { Input } from "@/modules/core/components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/modules/core/components/button";
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
  FormMessage,
} from "@/modules/core/components/form";
import { Input as InputType } from "@/types/input";
import uniqueId from "lodash.uniqueid";

export const InputTypeSchema = z.union([
  z.literal("checkbox"),
  z.literal("date"),
  z.literal("email"),
  z.literal("number"),
  z.literal("radio"),
  z.literal("range"),
  z.literal("tel"),
  z.literal("text"),
]);

export const InputSchema = z
  .object({
    id: z.string().nullable(),
    required: z.boolean(),
    placeholder: z.string(),
    helperText: z.string(),
    type: InputTypeSchema,
    label: z.string().min(1, "Label is required"),
  })
  .transform((val) => ({
    ...val,
    id: uniqueId(val.label + val.type),
  }));

type IInputSchema = z.input<typeof InputSchema>;

const defaultValues: IInputSchema = {
  id: null,
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

interface Props {
  onSubmit: (state: InputType) => void;
}

function InputForm({ onSubmit }: Props) {
  const form = useForm<IInputSchema>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(InputSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} id="new-input">
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
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4 flex justify-center">
          <Button className="h-8 mr-1 w-full" type="submit" variant="outline">
            Add field
          </Button>
          <Button type="button" className="h-8 w-full" variant="destructive">
            Remove
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default InputForm;
