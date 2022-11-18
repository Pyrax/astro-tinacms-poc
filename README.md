# Proof of concept for Astro with TinaCMS

Astro is a framework for building content-focused websites whereas TinaCMS provides a visual content authoring experience backed by Git. Therefore, they seem to make a great couple with good DX and editor UX. This concept explores technical details and limitations of this combination.

## Goals

1. Defined pages using Astro.
1. Create dynamic pages with TinaCMS for editors and add them to Astro.
1. Keep defined pages (`src/pages`) and dynamic pages (`content`) separate.
1. Being able to create dynamic pages at root-level (like https://example.com/privacy-policy). In combination with pre-defined pages this can be difficult in some frameworks.
1. Edit content with live preview (called "Contextual Editing" in Tina).
1. Demonstrate CI workflow.

## Limitations

This concept has a few limitations which might be resolvable by using a different approach. Currently, I am aware of the following:

1. Markdown from TinaCMS must be rendered through a separate parser since Astro uses an internal component which is only exposed through direct imports. In fact, once in production, we are actually fetching and rendering remote markdown. Do not let yourself be fooled that content is stored in this repo and in local mode it directly edits these local files.
1. TinaCMS generates `public/admin/index.html` which Astro only servers at `/admin/index.html`. I created a meta redirect at `/admin` to said `/admin/index.html`. This solution is independant from hosting providers. A better solution would be setting up an URL rewrite for your hoster.
1. URLs for CMS content are currently generated through the filename of the markdown files. This leaves some space for errors.
1. Had to patch TinaCMS to explicitly resolve as ESM by including `type: "module"`, so that Astro/npm can build correctly.

## Feedback

Feel free to leave feedback by opening a discussion! Use these suggestions for comments:

- What can be improved or simplified?
- Which use-case would you like to see covered?
- Where do you think this architecture involves problems or is too complex?

... or just share your thoughts!
