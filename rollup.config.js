// Contents of the file /rollup.config.js
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import {uglify} from 'rollup-plugin-uglify';

const config = [
  {
    input: 'build/compiled/extension.js',
    output: {
      file: 'dist/extension.js',
      format: 'es',
      sourcemap: true,
    },
    external: [],
    plugins: [typescript(), uglify()]
  }, 
  // {
  //   input: 'build/compiled/index.d.ts',
  //   output: {
  //     file: 'lockstep-api.d.ts',
  //     format: 'es'
  //   },
  //   plugins: [dts()]
  // }
];
export default config;