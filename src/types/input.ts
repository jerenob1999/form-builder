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
  type: InputType;
  label: string;
}
