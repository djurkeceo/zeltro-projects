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
        const preloadTag = match.replace(
          /rel=["']stylesheet["']/,
          'rel="preload" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"'
        );
        return `${preloadTag}<noscript>${match}</noscript>`;
      }
    );
  },
});

export default defineConfig({
  plugins: [react(), deferStylesheets()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'motion';
          }
        },
      },
    },
  },
});
