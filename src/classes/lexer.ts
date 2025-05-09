import { lexer } from "marked";
import { stringify } from "yaml";
import type { Form } from "../types";

export class IssueLexer {
  constructor(public form: Form) {}

  yaml() {
    if (this.form.meta === undefined) {
      throw new SyntaxError("`meta` is required to generate YAML");
    }

    const data = {
      ...this.form.meta,
      body: this.form.body,
    };
    const content = stringify(data);

    return content;
  }

  parse(content: string) {
    const tokens = lexer(content);

    console.log(tokens);
  }
}
