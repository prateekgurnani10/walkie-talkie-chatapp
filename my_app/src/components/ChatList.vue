<template>
    <div>
        <button @click= "createChatRoom"> create chatroom</button>
    </div>
</template>
<script>

import {db} from '../firebase';
export default {

    methods: {
        asyn createChatRoom() {
            const newChat = await db.collection('chats').add({
                createdAt: Date.now(),
                owner: this.uid,
                members: [this.uid]
            })

            console.log(newChat)
        }
    },
    props: ['uid']

}
</script>
