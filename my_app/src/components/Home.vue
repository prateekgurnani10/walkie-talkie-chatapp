<template>
    <div class = "section">
        <h2>Home.vue</h2>
        <User v-slot:user="{user}">
            <div v-if="user">
                <h3>User Profile </h3>
              <UserProfile :user= "user" />
              <ChatList :uid="user.uid" />
            </div>
            <Login v-else />
        </User>


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
