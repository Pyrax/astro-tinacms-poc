import type { Collection } from 'tinacms';

export const siteCollection: Collection = {
  name: 'site',
  label: 'Sites',
  path: 'content/sites',
  format: 'md',
  ui: {
    global: true,
  },
  defaultItem: () => ({
    draft: true,
  }),
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'boolean',
      name: 'draft',
      label: 'is draft?',
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
  ],
};
