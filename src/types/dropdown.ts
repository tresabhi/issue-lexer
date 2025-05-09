import type { FormElementType } from "./elements";

export interface DropdownFormElement {
  /**
   * The identifier for the element, except when `type` is set to markdown. Can
   * only use alpha-numeric characters, `-`, and `_`. Must be unique in the
   * form definition. If provided, the `id` is the canonical identifier for the
   * field in URL query parameter prefills.
   */
  id?: string;

  type: FormElementType.Dropdown;

  attributes: {
    /**
     * A brief description of the expected user input, which is displayed in
     * the form.
     */
    label: string;

    /**
     * A description of the dropdown to provide extra context or guidance,
     * which is displayed in the form.
     */
    description?: string;

    /**
     * Determines if the user can select more than one option.
     */
    multiple?: boolean;

    /**
     * An array of options the user can choose from. Cannot be empty and all
     * choices must be distinct.
     */
    options: string[];

    /**
     * Index of the preselected option in the options array. When a default
     * option is specified, you cannot include "None" or "n/a" as options.
     */
    default?: number;
  };

  validations?: {
    /**
     * Prevents form submission until element is completed. Only for public
     * repositories.
     */
    required?: boolean;
  };
}
