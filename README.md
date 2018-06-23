# vue-use

> use Vue.use usefully

## Install

```
npm install vue-use
```

## Usage

#### basic usage

```vuejs
import Vue from 'vue'
import use from 'vue-use'

use(Vue, {
  filters: {
    filterA,
    filterB
    // vue filters
  }
  // more vue-use options see below
})
```

```vuejs
import Vue from 'vue'
import {useConfig, useFilters, useComponents, useDirectives, useNextTick} from 'vue-use'
useFilters(Vue, {
  filterA,
  filterB
  // vue filters
})
```

#### Vue Filters

See above..

Vue.Filters https://vuejs.org/v2/guide/filters.html

#### Vue Components
```vue
use(Vue, {
  components: {
    // components
  }
})
```

```vue
useComponents(Vue, {
  // components
})
```

Vue.Components https://vuejs.org/v2/guide/components.html

#### Vue Directives
```vue
use(Vue, {
  directives: {
    // directives
  }
})
```

```vue
useDirectives(Vue, {
  // directives
})
```

Vue.Directives https://vuejs.org/v2/api/#Vue-directive

#### Vue-use Global Config

Vue Global Config https://vuejs.org/v2/api/#Global-Config

```vuejs
use(Vue, {
  config: {
    // below all default value of Vue Global Config
    silent: false,
    optionMergeStrategies: {},
    devtools: process.env.NODE_ENV !== 'production', // Boolean
    errorHandler: undefined, // function (err, vm, info) // 2.2.0+
    warnHandler: undefined, // function (msg, vm, trace) // 2.4.0+
    ignoredElements: [], // 2.5.0+
    keyCodes: {},
    performance: false, // 2.2.0+
    productionTip: false // 2.2.0+
  }
})
```

#### Vue-use.use

equal to Vue.use..

Vue.use https://vuejs.org/v2/api/#Vue-use

```vuejs
import Vuex from 'vuex'
import VueToasted from 'vue-toasted'
use(Vue, {
  use: [
    Vuex,
    [VueToasted, {duration: 3000}]
  ]
})
```

#### Vue-use.nextTick

```vue
use(Vue, {
  nextTick: function () {}
})
```

Vue.nextTick https://vuejs.org/v2/api/#Vue-nextTick

