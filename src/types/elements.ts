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

export type FormElement = {
  /**
   * The identifier for the element, except when `type` is set to markdown. Can
   * only use alpha-numeric characters, `-`, and `_`. Must be unique in the
   * form definition. If provided, the `id` is the canonical identifier for the
   * field in URL query parameter prefills.
   */
  id?: string;
} & (
  | CheckboxesFormElement
  | DropdownFormElement
  | InputFormElement
  | MarkdownFormElement
  | TextareaFormElement
);
