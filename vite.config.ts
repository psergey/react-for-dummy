import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pathLib from 'path';

const baseUrl = './src/';

const aliases = [
  ['@components', './components'],
  ['@hooks', './hooks'],
  ['@utils', './utils'],
  ['@services', './services'],
].map(([name, path]) => ({
  find: name,
  replacement: pathLib.resolve(__dirname, baseUrl, path),
}));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
