<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: lizhixiang
 * @Email: admin@zjjhyzd.com
 * @Date: 2021-03-31 14:37:33
 * @LastEditors: lizhixiang
 * @LastEditTime: 2021-03-31 14:59:17
-->
<template>
  <p>{{ t("message") }}</p>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HelloI18n",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    // Something todo ..

    return { t };
  },
});
</script>

<i18n>
{
  "zh": {
    "message": "Hello i18n in SFC!"
  }
}
</i18n>
