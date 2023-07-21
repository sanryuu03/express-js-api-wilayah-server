const { build } = require("esbuild")

build({
  entryPoints: ["./app.ts"],
  minify: true,
  keepNames: true,
  bundle: true,
  sourcemap: true,
  platform: "node",
  outfile: "./build/index.js"
}).catch(() => {
  process.exit(1)
})