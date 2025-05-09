import type { FormElementType } from "./elements";

export interface InputFormElement {
  type: FormElementType.Input;

  /**
   * A brief description of the expected user input, which is also displayed
   * in the form.
   */
  label: string;

  /**
   * A description of the field to provide context or guidance, which is
   * displayed in the form.
   */
  description?: string;

  /**
   * A semi-transparent placeholder that renders in the field when empty.
   */
  placeholder?: string;

  /**
   * Text that is pre-filled in the field.
   */
  value?: string;

  validations?: {
    /**
     * Prevents form submission until element is completed. Only for public
     * repositories.
     */
    required?: boolean;
  };
}
