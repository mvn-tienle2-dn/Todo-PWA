import Vue from 'vue'
import VueI18n from 'vue-i18n'

// /**
//  * Import Language
//  */
import en from './i18n/en_US.json'
import ja from './i18n/ja_JA.json'
import vn from './i18n/vn_VN.json'

// /**
//  * Config
//  */
Vue.use(VueI18n)
// Create VueI18n instance with options
export default new VueI18n({
  locale: 'en',
  messages: {
    en: {
      lang: en
    },
    vn: {
      lang: vn
    },
    ja: {
      lang: ja
    }
  }
})
