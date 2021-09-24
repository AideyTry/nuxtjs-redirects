# Redirect Module 🔀 nuxt-redirect-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Nuxt module to dynamically redirect initial requests

[📖 **Release Notes**](./CHANGELOG.md)

## Features

Nuxt module to dynamically redirect

The current redirect is a personal project, please do not use it, it is still in the development stage

## Setup

1. Add the `nuxt-redirects` dependency with `yarn` or `npm` to your project
2. Add `nuxt-redirects` to the `modules` section of `nuxt.config.js`:
3. Configure it:

```js
{
  modules: [
    ['nuxt-redirects']
  ]
}
```

### Using top level options

```js
{
  modules: [
    'nuxt-redirects'
  ],
  redirects: {
    // Redirect options here
  }
}
```

## Options
### `url`

- url: `api`

Backend api interface.
### `type`

- Default: `'PC'`
- Optional value: `'H5' || 'PC'`

Distinguish device type.

### `callback`

- Default: `(data) => {}`

You can set redirects list.

## Usage

Simply add the links you want to redirect as objects to the module option Object:

```js
  redirects: {
    url: `/config/api/seo/redirect/list`
  },
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Alexander Lichter <shadowmon36@gmail.com>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/dt/nuxt-redirects.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-redirects
[npm-downloads-src]: https://img.shields.io/npm/v/nuxt-redirects/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-redirects
[circle-ci-src]: https://img.shields.io/circleci/project/github/ShadowMon/nuxtjs-redirects.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/ShadowMon/nuxtjs-redirects
[codecov-src]: https://img.shields.io/codecov/c/github/ShadowMon/nuxtjs-redirects.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/ShadowMon/nuxtjs-redirects
[david-dm-src]: https://david-dm.org/ShadowMon/nuxtjs-redirects/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/ShadowMon/nuxtjs-redirects
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com