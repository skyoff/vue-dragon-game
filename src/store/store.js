import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game'
import messages from './modules/messages'
import shop from './modules/shop'
import alerts from './modules/alerts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    game,
    messages,
    shop,
    alerts
  }
})
