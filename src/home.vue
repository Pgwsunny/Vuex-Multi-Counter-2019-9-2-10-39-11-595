<template>
  <div>
    <button @click="start">返回</button>
    <br />
    {{username}}
    <br />
    <button @click="my">我的</button>
    <br />
    <router-view />
    <br />
  </div>
</template>

<script>
import dialogconfirm from "./dialog-confirm.vue";
import main from "./main.vue";
import my from "./my.vue";
export default {
    props: {
    username: String
  },
  data: function() {
    return {
    // username: ""
    };
  },
  methods: {
    start: function() {
      this.$router.push({
        path: "/dialogconfirm",
        component: dialogconfirm
      });
    },
    my: function() {
      this.$router.push({
        path: "/my",
        component: my
      });
    }
  }
};
</script>