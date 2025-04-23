import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  theme:{
    defaultTheme: 'dark'
  },
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')
