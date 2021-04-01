/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: lizhixiang
 * @Email: admin@zjjhyzd.com
 * @Date: 2021-03-31 18:35:04
 * @LastEditors: lizhixiang
 * @LastEditTime: 2021-04-01 11:44:57
 */
/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import installElementPlus from "./plugins/element";
import '@/prototype'


const app = createApp(App)
installElementPlus(app)
app.use(i18n).use(store).use(router).mount("#app");
