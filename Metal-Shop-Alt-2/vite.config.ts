import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const deferStylesheets = () => ({
  name: 'defer-stylesheets',
  apply: 'build',
  enforce: 'post',
  transformIndexHtml(html: string) {
    return html.replace(
      /<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+\.css(?:\?[^"']*)?)["'][^>]*>/g,
      (match) => {
        const deferredTag = match.replace(
          /rel=["']stylesheet["']/,
          'rel="stylesheet" media="print" onload="this.media=\'all\'"'
        );
        return `${deferredTag}<noscript>${match}</noscript>`;
      }
    );
  },
});

export default defineConfig({
  plugins: [react(), deferStylesheets()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor';
          }
        },
      },
    },
  },
});
