// vite.config.js
export default {
  build: {
    lib: {
      entry: './src/main.js',
      name: 'CountdownWidget',
      fileName: () => 'countdown_bundle.js',
      formats: ['iife'],
    },
  },
};
