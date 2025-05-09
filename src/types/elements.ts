import type { CheckboxesFormElement } from "./checkboxes";
import type { DropdownFormElement } from "./dropdown";
import type { InputFormElement } from "./input";
import type { MarkdownFormElement } from "./markdown";
import type { TextareaFormElement } from "./textarea";

export enum FormElementType {
  Checkboxes = "checkboxes",
  Dropdown = "dropdown",
  Input = "input",
  Markdown = "markdown",
  Textarea = "textarea",
}

export type FormElement =  (
  | CheckboxesFormElement
  | DropdownFormElement
  | InputFormElement
  | MarkdownFormElement
  | TextareaFormElement
);
