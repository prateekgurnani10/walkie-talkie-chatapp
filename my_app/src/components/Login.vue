<template>
    <aside>
        <h3>
            Sign in Anonymously
        </h3>
        <button @click="auth.signinAnonymously()">Sign in</button>
    </aside>
</template>
<script>
import auth from "../firebase"
export default {
    data(){
        return {
            auth,
        }
    },

}
</script>
