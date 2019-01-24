import Vue from 'vue'
import VueI18n from 'vue-i18n'
import customZhCn from './lang/zh-CN'
import customZhTw from './lang/zh-TW'
import customEnUs from './lang/en-US'
import zhCnLocale from 'iview/dist/locale/zh-CN'
import enUsLocale from 'iview/dist/locale/en-US'
import zhTwLocale from 'iview/dist/locale/zh-TW'

Vue.use(VueI18n)

// 自动根据浏览器系统设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
const lang = window.localStorage.lang || localLang || 'zh-CN'

Vue.config.lang = lang
Vue.locale = () => {}

const messages = {
  zhCn: Object.assign(zhCnLocale, customZhCn),
  zhTw: Object.assign(zhTwLocale, customZhTw),
  enUs: Object.assign(enUsLocale, customEnUs)
}

const i18n = new VueI18n({
  locale: lang,
  messages
})

export default i18n
