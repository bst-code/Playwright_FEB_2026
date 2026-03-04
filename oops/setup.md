
Basic setup:

npm install -g typescript
tsc -v
tsc .\child.ts
node .\child.js

-------------------------------

// Advanced setup
npm init -y -- initialize npm - This creates package.json.
npm install typescript --save-dev  --Install TypeScript

npx tsc --init =Create tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  }
}



npx tsc - compile ts to js

node dist/child.js

-------------------------------------------------------
npm = Node Package Manager

npm install typescript --Now TypeScript is saved inside your project.

npm install -g typescript --Now you can use tsc anywhere in your system.
