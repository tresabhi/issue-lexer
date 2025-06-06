import type { FormElementType } from "./elements";

export interface TextareaFormElement {
  /**
   * The identifier for the element, except when `type` is set to markdown. Can
   * only use alpha-numeric characters, `-`, and `_`. Must be unique in the
   * form definition. If provided, the `id` is the canonical identifier for the
   * field in URL query parameter prefills.
   */
  id?: string;

  type: FormElementType.Textarea;

  attributes: {
    /**
     * A brief description of the expected user input, which is also displayed
     * in the form.
     */
    label: string;

    /**
     * A description of the text area to provide context or guidance, which is
     * displayed in the form.
     */
    description?: string;

    /**
     * A semi-opaque placeholder that renders in the text area when empty.
     */
    placeholder?: string;

    /**
     * Text that is pre-filled in the text area.
     */
    value?: string;

    /**
     * If a value is provided, submitted text will be formatted into a
     * codeblock. When this key is provided, the text area will not expand for
     * file attachments or Markdown editing.
     */
    render?: string;
  };

  validations: {
    /**
     * Prevents form submission until element is completed. Only for public
     * repositories.
     */
    required?: boolean;
  };
}
