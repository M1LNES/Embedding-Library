---
title: Development
sidebar_position: 3
slug: /development/development
---

## Git cloning

```cmd title="Cloning"
git clone https://github.com/M1LNES/Embedding-Library.git
```

## Downloading libraries

Library requires minified versions of PreJSON and Vision. Firstly, add into `.env` file valid token and package url.

```
ACCESS_TOKEN=4eYo9qFmZw2oRXtZnIyOHhUy3TlPLp2JbrsA1MRc7Fx
PACKAGE_URL=https://3348d0628f75ab43fe445e17eb650c1b.sbksapps.com/3/packages/analytics/bundle.js?version=v1.0.0
```

After that, just simply execute script

```
npm run download
```

that will download into `/dist` folder minified version of libraries.

## Building new version

Library is built by command:

```
npm run build
```

The result is in `/dist` folder and will contain two files - `empli-embed.js` and `empli-embed-backend.js`.

## Updating version on NPM

New version of library can be pushed into npm by

```cmd
npm publish
```

Before publishing, make sure that you re-built the new version of library.

`.npmignore` file contains file that are being ignored during releasing new version into npm. Make sure that if you added any new files that they are included in this file.
