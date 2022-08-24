# news-ticker  ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/tigersway/svelte-news-ticker?style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/tigersway/svelte-news-ticker?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/tigersway/svelte-news-ticker?style=flat-square)

## Usage

### via CDN  [![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/@tigersway/news-ticker?label=jsDelivr&logo=jsdelivr&style=flat-square)](https://www.jsdelivr.com/package/npm/@tigersway/news-ticker)

```html
<!doctype html>
<html class="no-js" lang="en">
<head>
...
<body>
  <div class="news-wrapper">
    <news-ticker id="flash-news" duration=5>
      <p>...First news</p>
      <p>Second news with a <a href="https://google.com">link</a></p>
      <p>And possibly of course, some "<strong>colors</strong>" like <span style="color:red;">red</span> or <span style="color:lime">lime</span>!</p>
    </news-ticker>
  </div>
...
  <script src="https://cdn.jsdelivr.net/npm/@tigersway/news-ticker@1.0.0"></script>
</body>
</html>
```

### via npm/pnpm/yarn  [![npm](https://img.shields.io/npm/dm/@tigersway/news-ticker?label=npmjs&logo=npm&style=flat-square)](https://www.npmjs.com/package/@tigersway/news-ticker)

... and your bundler!

```js
import '@tigersway/news-ticker';
```

### Options

- `id`: CSS id selector, needed if you have more than 1 news-ticker on the same page,
- `duration`: (default 6) Number of seconds between flips.

## CHANGELOG

- **v1.0.2**
  - Added small right margin on the news

- **v1.0.0**
  - First public release
