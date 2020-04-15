<template>
  <aside class="section">
    <h3>Sign in Anonymously</h3>
    <button class="button" @click="auth.signInAnonymously()">Sign In</button>
    </aside>
</template>

<script>
import { auth } from '../firebase';

export default {
  data() {
    return {
      auth,
    }
  },
}
</script>
