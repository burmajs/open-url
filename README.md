## open-url – Node.js module for opening URLs

This code are from https://github.com/rauschma/openurl

### Install

```bash
npm i @burmajs/open-url
```

```bash
pnpm i @burmajs/open-url
```

### Example

#### ESM

```ts
import express from "express";
import openUrl from "@burmajs/open-url";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
  res.end();
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
  openUrl("http://localhost:5000");
});
```

#### Common Js

```js
const express = require("express");
const openUrl = require("@burmajs/open-url");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
  res.end();
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
  openUrl("http://localhost:5000");
});
```
