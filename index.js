#!/usr/bin/env node

import { execSync } from "child_process";

const projectName = process.argv[2] || "my-app";

console.log(`🚀 Setting up a new Vite + React + Tailwind v4 project: ${projectName}...`);

execSync(
	`npm create vite@latest ${projectName} -- --template react && 
   cd ${projectName} && 
   npm install && 
   npm install tailwindcss@latest @tailwindcss/vite@latest && 
   echo "import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  	plugins: [react(), tailwindcss()],
})" > vite.config.js &&
   echo '@import "tailwindcss";' > src/index.css`,
	{ stdio: "inherit", shell: true }
);

console.log(`✅ Setup complete! Starting Vite...`);

process.chdir(projectName);
execSync("npm run dev", { stdio: "inherit", shell: true });

// Open Vite in the default web browser
setTimeout(() => {
	execSync("open http://localhost:5173");
}, 3000);