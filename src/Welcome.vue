<template>
  <div>
    <h1>
      Welcome to {{username}}!
      <br />
      <router-link :to="'/welcome/' + username +'/counter'">Counter</router-link>
      <br />
      <router-link :to="'/welcome/' + username +'/todolist'">go to list</router-link>
      <router-view />
    </h1>
  </div>
</template>
<script>
export default {
  name: "welcome",
  props: {
    username: String
  }
};
</script>