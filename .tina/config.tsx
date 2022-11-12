import { defineConfig } from 'tinacms';
import { blogPostCollection } from './blogPostCollection';
import { siteCollection } from './siteCollection';
import dotenv from 'dotenv';

dotenv.config({ path: '../' });

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT || '', // Get this from tina.io
  token: process.env.TINA_TOKEN || '', // Get this from tina.io
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'images',
    },
  },
  schema: {
    collections: [blogPostCollection, siteCollection],
  },
});
