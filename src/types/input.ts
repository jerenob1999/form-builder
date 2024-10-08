export type InputType =
  | "checkbox"
  | "date"
  | "email"
  | "number"
  | "radio"
  | "range"
  | "tel"
  | "text";

export interface Input {
  id: string | null;
  required: boolean;
  placeholder: string;
  helperText: string;
  type: InputType;
  label: string;
}
