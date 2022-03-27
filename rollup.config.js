// rollup.config.js
import typescript from '@rollup/plugin-typescript';

// see https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cjs from "rollup-plugin-cjs-es";


// noinspection JSUnusedGlobalSymbols
export default {
    input: './com.thibault.p0.sdPlugin/app.ts',
    output: {
        file: './com.thibault.p0.sdPlugin/build/bundle.js',
        format: 'iife',
        sourcemap: 'inline'
    },
    plugins: [
        cjs({ include: /node_modules/ }),
        typescript(),
        nodeResolve()
    ],
};