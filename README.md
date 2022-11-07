# Proof of concept for Astro + TinaCMS

Astro is a framework for building content-focused websites while TinaCMS provides a visual content authoring experience backed by Git. Therefore, they seem to make a great couple with good DX and editor UX. This concept explores technical details and limitations of this combination.

## Goals

1. Defined pages using Astro.
1. Create dynamic pages with TinaCMS for editors and add them to Astro.
1. Keep defined pages (`src/pages`) and dynamic pages (`content`) separate.
1. Being able to create dynamic pages at root-level (like https://example.com/privacy-policy). In combination with pre-defined pages this can be difficult in some frameworks.

## Limitations

This concept has a few limitations which might be resolvable by using a different approach. Currently, I am aware of the following:

1. TinaCMS generates `public/admin/index.html` which Astro only servers at `/admin/index.html`. I created a meta redirect at `/admin` to said `/admin/index.html`. This solution is independant from hosting providers. A better solution would be setting up an URL rewrite for your hoster.
1. Relative paths to retrieve content with `Astro.glob()` can be very long since content lives in root folder. Broken paths can occur quickly this way. This is somewhat fixed by using Astro utility components from `src/hooks`.
1. URLs for CMS content are currently generated through the filename of the markdown files. This leaves some space for errors.

## Feedback

Feel free to leave feedback by opening a discussion! Use these suggestions for comments:

- What can be improved or simplified?
- Which use-case would you like to see covered?
- Where do you think this architecture involves problems or is too complex?

... or just share your thoughts!
