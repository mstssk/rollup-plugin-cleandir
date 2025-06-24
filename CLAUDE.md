# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Build and Development
- `npm run build` - Compiles TypeScript source to JavaScript and generates type definitions
- `npm run prebuild` - Removes existing build artifacts (index.js, index.d.ts)
- `npm test` - Runs the test suite (currently runs build as test)

### Code Quality
- `npm run lint` - Checks code formatting with Prettier
- `npm run fmt` - Formats code with Prettier

### Publishing
- `npm run prepublishOnly` - Validates that index.js exists before publishing

## Architecture

This is a Rollup plugin that provides directory cleaning functionality. The architecture is straightforward:

### Core Structure
- **index.ts** - Main plugin implementation, exports `cleandir` function
- **package.json** - Defines build scripts and dependencies
- **example/** - Contains usage example with rollup.config.mjs

### Plugin Implementation
The plugin wraps the `@mstssk/cleandir` library and integrates it into Rollup's build process:

- Uses TypeScript with strict type checking
- Targets ES2022 with CommonJS module output
- Generates both JavaScript and TypeScript declaration files
- Plugin hooks into Rollup's build lifecycle (default: `buildStart` hook)
- Supports configurable hooks and execution order

### Key Dependencies
- `@mstssk/cleandir` - Core directory cleaning functionality
- Peer dependency on `rollup` >=4.0.0
- TypeScript for development and type generation

### Build Process
1. TypeScript compilation removes old artifacts first (`prebuild`)
2. Compiles TypeScript to CommonJS with type declarations
3. Output files: `index.js` and `index.d.ts`

The plugin is designed to be lightweight and focused on a single responsibility: cleaning output directories during Rollup builds.