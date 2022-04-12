import { defineConfig } from '@windicss/plugin-utils';

export default defineConfig({
  attributify: true,

  extract: {
    exclude: ['_virtual_uno.css'],
  },
});
