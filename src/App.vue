<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: lizhixiang
 * @Email: admin@zjjhyzd.com
 * @Date: 2021-03-31 14:31:31
 * @LastEditors: lizhixiang
 * @LastEditTime: 2021-03-31 15:35:14
-->
<template>
  <img src="./assets/logo.png" />
  <div>
    <p>
      If Element Plus is successfully added to this project, you'll see an
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <el-button type="primary">{{ BASE_API }}</el-button>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <HelloI18n></HelloI18n>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloI18n from "@/components/HelloI18n";

export default {
  name: "App",
  data() {
    return {
      BASE_API: process.env.VUE_APP_BASE_API,
    };
  },
  components: {
    HelloWorld,
    HelloI18n,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
