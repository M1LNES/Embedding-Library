---
title: Structure
sidebar_position: 1
slug: /development/structure
hide_title: true
---

## `./docs`

Contains functions for generating documentation.

## `./src`

Library source code.

### `./src/client`

Contains React components (such as `<Widget> or <WidgetVision>`) or files with functions/constants used in that frontend components.

### `./src/server`

Contains routes for back-end endpoints and other functions for backend.

### `./src/index.js`

File that exports React components.

### `./src/backend.js`

File with exported routes of Express router.

## `./script/postinstall.sh`

Script for installing minified versions of libraries.

## `./dist`

Folder with minified libraries (PreJSON, Vision) and with built library files.

## `./webpack.config.js`

Config used for building library.
