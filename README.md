<!--
 * @Author: Aiden jason_dlb@sina.cn
 * @Date: 2023-05-04 15:11:28
 * @LastEditors: Aiden jason_dlb@sina.cn
 * @LastEditTime: 2023-05-16 19:06:11
 * @FilePath: \nuxtjs-redirects\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# Redirect Module 🔀 nuxt-redirect-module of oMall.

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

1. Add the `nuxt-olight-redirect` dependency with `yarn` or `npm` to your project
2. Add `nuxt-olight-redirect` to the `modules` section of `nuxt.config.js`:
3. Configure it:

```js
{
  modules: [
    ['nuxt-olight-redirect']
  ]
}
```

### Using top level options

```js
{
  modules: [
    'nuxt-olight-redirect'
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
