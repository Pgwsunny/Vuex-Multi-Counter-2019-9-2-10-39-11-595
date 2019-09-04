<template>
  <div>
    <button @click="start">返回</button>
    <br />
    {{username}}
    <router-view />
    <br />
  </div>
</template>

<script>
import dialogconfirm from "./dialog-confirm.vue";
import main from "./main.vue";
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
    }
  }
};
</script>