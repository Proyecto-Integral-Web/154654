import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import partidas from './module/partidas'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    user,
    partidas
  }
})
