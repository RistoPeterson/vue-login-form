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
          router.replace('/');
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
  color:inherit;
}

input {
 padding:3px 10px;
 margin-right: 3px;
 border: 2px solid #fff;
 border-radius: 3px;
}

input[type=submit] {
    padding:3px 10px;
    color: #fff;
    background: transparent;
    cursor: pointer;
    border: 2px solid #fff;
}

input[type=submit]:hover {
    padding:3px 10px;
    color: black;
    background: #fff;
    cursor: pointer;
    border: 2px solid #fff;
}

</style>
