<template>
    <div class="about-wrap">
        <blog-post
         :post="aboutMe"
        />
    </div>
</template>

<script>
    import BlogPost from "./components/blog/BlogPost.vue";
    export default {
        name: "About",
        components: {BlogPost},
        data() {
            return {
                aboutMe: {}
            }
        },
        mounted() {
            this.axios.get("/proxy-api/blog/getAbout")
                .then((response) => {
                    let data = response.data;
                    this.aboutMe = Object.assign(data, {
                        title: "About Me",
                        dateCreated: data.lastUpdated})
                });
        }
    }
</script>

<style scoped lang="scss">
</style>