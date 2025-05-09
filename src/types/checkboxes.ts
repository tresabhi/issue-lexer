import type { FormElementType } from "./elements";

export interface CheckboxesFormElement {
  type: FormElementType.Checkboxes;

  /**
   * A brief description of the expected user input, which is displayed in the
   * form.
   */
  label: string;

  /**
   * A description of the set of checkboxes, which is displayed in the form. Supports Markdown formatting.
   */
  description?: string;

  /**
   * An array of checkboxes that the user can select. For syntax, see below.
   */
  options: {
    /**
     * The identifier for the option, which is displayed in the form. Markdown
     * is supported for bold or italic text formatting, and hyperlinks.
     */
    label: string;

    /**
     * Prevents form submission until element is completed. Only for public
     * repositories.
     */
    required?: boolean;
  }[];

  validations?: {
    /**
     * Prevents form submission until element is completed. Only for public
     * repositories.
     */
    required?: boolean;
  };
}
