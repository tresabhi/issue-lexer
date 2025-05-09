export interface Meta {
  /**
   * A name for the issue form template. Must be unique from all other
   * templates, including Markdown templates.
   */
  name: string;

  /**
   * A description for the issue form template, which appears in the template
   * chooser interface.
   */
  description: string;

  /**
   * People who will be automatically assigned to issues created with this
   * template.
   */
  assignees?: string[];

  /**
   * Labels that will automatically be added to issues created with this
   * template. If a label does not already exist in the repository, it will not
   * be automatically added to the issue.
   */
  labels?: string[];

  /**
   * A default title that will be pre-populated in the issue submission form.
   */
  title?: string;

  /**
   * The issue type that will be automatically added to issues created with
   * this template. Issue types are defined at the organization level and can
   * be used to create a shared syntax across repos.
   */
  type?: string;

  /**
   * Projects that any issues created with this template will automatically be
   * added to. The format of this key is PROJECT-OWNER/PROJECT-NUMBER. >
   *
   *
   * @note The person opening the issue must have write permissions for the
   * specified projects. If you don't expect people using this template to have
   * write access, consider enabling your project's auto-add workflow. For more
   * information, see [Adding items automatically](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically).
   */
  projects?: string[];
}
