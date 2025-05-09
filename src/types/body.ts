import type { FormElement } from "./elements";
import type { Meta } from "./meta";

export interface Form {
  /**
   * Required information for generating yaml which resides in
   * `/.github/ISSUE_TEMPLATE/your-form-name.md`
   */
  meta?: Meta;

  /**
   * Definition of the input types in the form.
   *
   * Used by GitHub for rendering the form when submitting an issue and by
   * Issue Lexer for parsing submissions.
   */
  body: FormElement[];
}
