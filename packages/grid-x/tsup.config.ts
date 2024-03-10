import { defineConfig } from 'tsup';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  minify: isProduction,
  entry: {
    index: 'src/index.ts',
  },
  clean: ['dist'],
  target: 'esnext',
  external: ['react'],
  sourcemap: true,
  dts: true,
  format: isProduction ? ['esm', 'cjs'] : ['esm'],
  injectStyle: false,
});
