import type { Collection } from 'tinacms';

export const blogPostCollection: Collection = {
  name: 'post',
  label: 'Blog posts',
  path: 'content/posts',
  format: 'md',
  ui: {
    filename: {
      readonly: true,
      // Prevents spaces and special chars in filenames which means it also prevents sub directories (can be changed):
      slugify: (values) =>
        `${values?.title?.toLowerCase().replace(/[\/ \W]/g, '-')}`,
    },
  },
  defaultItem: () => ({
    date: new Date().toISOString(),
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
      type: 'datetime',
      name: 'date',
      label: 'Date',
    },
    {
      type: 'boolean',
      name: 'draft',
      label: 'is draft?',
    },
    {
      type: 'image',
      name: 'cover',
      label: 'Cover image',
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
  ],
};
