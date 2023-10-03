// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";
// import { nodePolyfills } from "vite-plugin-node-polyfills";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), nodePolyfills()],
//   define: {
//     "process.env": {},
//   },
//   supported: {
//     bigint: true,
//   },
// });

import { defineConfig } from "vite";
// import react, svelte and other needs...

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    optimizeDeps: {
      // 👈 optimizedeps
      esbuildOptions: {
        target: "esnext",
        // Node.js global to browser globalThis
        define: {
          global: "globalThis",
        },
        supported: {
          bigint: true,
        },
      },
    },

    build: {
      target: ["esnext"], // 👈 build.target
    },
  });
};
