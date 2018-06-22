# vue-use

> use Vue.use usefully

## Install

```
npm install vue-use
```

## Usage

##### main.js

``` ecmascript 6
import Vue from 'vue'
import Vuex from 'vuex'

import use from 'vue-use'

import cap from './filter/cap'
import hello from './hello.vue'

use(Vue, {
  config: {
    ... // Global Config
  },
  filters: {
    cap,
    filterA,
    filterB
    ... // Vue Filter
  },
  directives: {
    directiveA,
    directiveB,
    ... // Vue Directive
  }
  nextTick: function () {
    // Vue nextTick
  },
  components: {
    hello
    ... // Vue Component
  },
  use: {
    Vuex
    ... // Vue Use
  }
})
```

##### App.vue

```vue
<template>
  <hello></hello>
</template>

```

##### hello.vue

```vue
<template>
  <label>
    <input
      :placeholder="'hi vue-use' | cap"
      v-focus
    >
  </label>
</template>
```

### Or

##### try

```vue
import Vue from 'vue'
import {use, useConfig, useFilters, useComponents, useDirectives, useNextTick} from 'vue-use'
useFilters(Vue, {
  filterA,
  filterB,
  ...
})
useNextTick(Vue, function () {})
```

## Vue Doc

- Global Config https://vuejs.org/v2/api/#Global-Config
- Components https://vuejs.org/v2/guide/components.html
- Filters https://vuejs.org/v2/guide/filters.html
- nextTick https://vuejs.org/v2/api/#Vue-nextTick
- Directives https://vuejs.org/v2/api/#Vue-directive
- Vue.use https://vuejs.org/v2/api/#Vue-use
