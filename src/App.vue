<template>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import firebase from 'firebase';

export default {
  setup () {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace('/Home');
        }
      });
    });
  }
}
</script>

<style lang="scss">

body {
  background: rgba($color: #c78306, $alpha: 1.0);
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, sans-serif;
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  color: inherit;
}

</style>
