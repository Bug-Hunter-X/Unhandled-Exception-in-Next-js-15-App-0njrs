# Unhandled Exception in Next.js 15 App

This repository demonstrates a common error in Next.js 15 applications: unhandled exceptions. The `about.js` page intentionally throws an error, which isn't gracefully handled by default.  The solution demonstrates how to implement error boundaries to catch and display these errors more user-friendly.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Navigate to `/about` in your browser. You will see the error.

## Solution

The solution uses `ErrorBoundary` component to catch and render a fallback UI for unhandled errors. Check out the improved `aboutSolution.js` for the fix. This improves user experience by providing a more informative error message than a generic browser error.