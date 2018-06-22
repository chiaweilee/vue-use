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
import use from 'vue-use'
import hello from './hello.vue'

use(Vue, {
  filters: {
    cap,
    upper,
    lower
    ...
  },
  components: {
    hello
  }
})
```

##### hello.vue

```vue
<template>
  <div>
    {{ 'hello' | cap }}
  </div>
</template>
```

## Vue Doc

- Components https://vuejs.org/v2/guide/components.html
- Filters https://vuejs.org/v2/guide/filters.html
