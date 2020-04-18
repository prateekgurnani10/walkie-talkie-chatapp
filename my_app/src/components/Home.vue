<template>
    <div class = "section">
        <h2>Home.vue</h2>
        <User v-slot:user="{user}">
            <div v-if="user">
                <UserProfile :user="user" />
            </div>
            <Login v-else />


    </div>

</template>

<script>

import Login from "./Login"
import User from "./User"
import UserProfile from "./UserProfile"
export default {
    components:{
        Login,
        User,
        UserProfile
    }

}
</script>
