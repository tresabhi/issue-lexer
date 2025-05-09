import type { FormElementType } from "./elements";

export interface MarkdownFormElement {
  type: FormElementType.Markdown;

  /**
   * The text that is rendered. Markdown formatting is supported.
   */
  value: string;
}
