import { FormElementType } from "../types";
import { IssueLexer } from "./lexer";

const modApplication = new IssueLexer({
  meta: {
    name: "Mod Application",
    description: "Apply to distribute your mod on BlitzKit Mods.",
    title: "[Mod Application]",

    labels: ["mod", "application"],
    projects: ["tresabhi/8"],
    assignees: ["tresabhi"],
  },

  body: [
    {
      type: FormElementType.Markdown,
      attributes: {
        value: `
# BlitzKit Mod Application

**DO NOT EDIT THE TITLE ABOVE.** Leave it as \`[Mod Application]\`.

Thank you for choosing BlitzKit to host your mod. Make sure you have read and comply with [the BlitzKit Code of Conduct](https://blitzkit.app/docs/legal/code-of-conduct/) and [the BlitzKit Content Rules](https://blitzkit.app/docs/legal/content-rules/).

Your GitHub account will be credited as the author of the mod. [Look pretty](https://docs.github.com/en/get-started/start-your-journey/setting-up-your-profile), upload a good profile picture, and choose a great display name before you apply. Do not change your GitHub username after applying (feel free to update your display name though).

<br />

## Mod Name

This is the name of your mod which will show up on Google, the search page, and in embeds. We recommend you follow proper capitalization rules. [Learn how to capitalize titles properly](https://www.grammarly.com/blog/punctuation-capitalization/capitalization-in-titles/).
        `,
      },
    },

    {
      id: "name",
      type: FormElementType.Input,
      validations: { required: true },
      attributes: { label: "Mod Name" },
    },

    {
      type: FormElementType.Markdown,
      attributes: {
        value: `
<br />

## ID

This is the ID of your mod which users will be directed to. You cannot change this later so be careful of what you choose. Ensure your ID follows kebab-case and is similar to your mod name. [Learn how to use kebab-case](https://developer.mozilla.org/docs/Glossary/Kebab_case).

Examples:

| ID                  | Resulting URL                                 |
| ------------------- | --------------------------------------------- |
| \`your-mod-name\`   | \`https://blitzkit.app/mods/your-mod-name\`   |
| \`my-awesome-mod\`  | \`https://blitzkit.app/mods/my-awesome-mod\`  |
| \`3-in-1-skin-mod\` | \`https://blitzkit.app/mods/3-in-1-skin-mod\` |
        `,
      },
    },

    {
      id: "id",
      type: FormElementType.Input,
      validations: { required: true },
      attributes: { label: "ID" },
    },

    {
      type: FormElementType.Markdown,
      attributes: {
        value: `
<br />

## Icon

This is the icon that will show up next to your mod name on Google, the search page, and in embeds. We recommend using a 512x512 image with a size of 1MB. Simply drag and drop your image into the box below. Alternatively, you can use the "add files" button.

<img src="https://i.imgur.com/UGlNWV1.gif" width="320px" />
        `,
      },
    },

    {
      id: "icon",
      type: FormElementType.Textarea,
      validations: { required: true },
      attributes: {
        label: "Icon",
        description: "Upload image here.",
      },
    },

    {
      type: FormElementType.Markdown,
      attributes: {
        value: `
<br />

## Short Description

This is the short description that users will see on Google, on the search page, and in embeds. Make sure it's catchy. [Learn how to write good product descriptions](https://wisepops.com/blog/product-descriptions).
        `,
      },
    },

    {
      id: "short-description",
      type: FormElementType.Input,
      validations: { required: true },
      attributes: { label: "Short Description" },
    },

    {
      type: FormElementType.Markdown,
      attributes: {
        value: `
<br />

## Website (Optional)

This is the website that users will have the option to click on. This can be your portfolio, a website for your mod, a GitHub page if your mod is open source, etc.
        `,
      },
    },

    {
      id: "website",
      type: FormElementType.Input,
      attributes: { label: "Website" },
    },

    {
      type: FormElementType.Markdown,
      attributes: {
        value: `
<br />

## Issues (Optional)

This is where your users can report issues with your mod. This can be your Discord server, a GitHub issue tracker, a Google form, your website, etc.
        `,
      },
    },

    {
      id: "issues",
      type: FormElementType.Input,
      attributes: { label: "Issues" },
    },

    {
      type: FormElementType.Markdown,
      attributes: {
        value: `
<br />

## Long Description

This is the long description that users will see when they click on your mod. Markdown is supported. [Learn how to write pretty documents with Markdown](https://www.markdownguide.org/).
        `,
      },
    },

    {
      id: "long-description",
      type: FormElementType.Textarea,
      validations: { required: true },
      attributes: { label: "Long Description", render: "markdown" },
    },

    {
      id: "long-description-no-md",
      type: FormElementType.Textarea,
      validations: { required: true },
      attributes: { label: "Long Description No MD" },
    },

    {
      type: FormElementType.Markdown,
      attributes: {
        value: `
<br />

## Containers

These are the \`.dmp\` files generated by the BlitzKit SDK. Simply drag and drop all your \`.dmp\` files into the box below. Alternatively, you can use the "add files" button.

<img src="https://i.imgur.com/BHZOo7S.gif" width="320px" />
        `,
      },
    },

    {
      id: "containers",
      type: FormElementType.Textarea,
      validations: { required: true },
      attributes: { label: "Containers", description: "Upload files here." },
    },
  ],
});

// await Bun.write(".github/ISSUE_TEMPLATE/test.yml", modApplication.yaml());
modApplication.parse(await Bun.file("temp/test.md").text());
