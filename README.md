# tuftey

A simple bookmarklet that uses https://mercury.postlight.com/web-parser/ and https://github.com/edwardtufte/tufte-css to produce a clean, readable version of the website you're currently browsing.

## Build
You'll need an API key from mercury. Set it as the environment variable `MERCURY_API_KEY` then run `yarn run build` or `npm run build` and you'll end up with tuftey.js in the dist directory.

## Usage
This is a bookmarklet so add it to your browser's bookmark bar, then simply browse to a page you wish to declutter and hit the bookmarklet.
