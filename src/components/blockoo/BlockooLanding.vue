<template>
    <Blockoo
        v-if="pageReady"
    />
</template>
  
<script>
import axios from "axios"
import Blockoo from "./Blockoo.vue"

export default {
    name: "BlockooLanding",
    components: {Blockoo},
    data() {
        return {
            pageReady: false,
            token: ""
        }
    },
    mounted() {

        axios.get("http://localhost:8000/blockoo/")
        .then((response) => {
            console.log(response.headers['set-cookies']);
            this.pageReady = true;
        });
    }

}
</script>