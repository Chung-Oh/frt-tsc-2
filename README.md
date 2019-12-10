# Typescript in practice with HTTP

**Used Packages**

- TypeScript `npm install typescript --save-dev`
- Live Server `npm install live-server --save-dev`
- Concurrently(will compile Typescript for JS and up Live Server,  configure in package.json) `npm install concurrently --save-dev`

**Basic**

- Compile .ts files from src/ to public/:
`tsc src/posts.ts --outDir public`

- Make compile only once:
`tsc -w` or `tsc --watch`

- Go up with Live Server, go public and run:
`live-server`

**Debugger**

1. Client-side build file map for debugger:

`tsc --sourceMap`

2. Go to tsconfig.json and add:

`"compilerOPtions": {
	"sourceMap": true,
}`
