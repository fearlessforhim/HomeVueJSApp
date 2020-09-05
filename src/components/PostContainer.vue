<template>
    <div class="post-container">
        <BlogPost
                v-for="(p) in posts"
                :key="p.id"
                :post="p"
        />
    </div>
</template>

<script>
    import BlogPost from "./BlogPost";

    export default {
        name: "PostContainer",
        components: {
            BlogPost
        },
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            this.axios.get("/api/blog/getPosts")
                .then((response) => {
                    this.posts = response.data;
                })
                .catch(() => {
                    this.posts = [
                        {
                            title: "Test Title",
                            dateCreated: new Date(),
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac bibendum turpis. Nullam magna justo, molestie a faucibus in, tempus vitae metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque malesuada felis nec ultricies lacinia. Sed id dictum lectus, nec accumsan lectus. Nam sodales lacinia ex, vel mollis sapien condimentum ullamcorper. Sed id quam ante.\n' +
                                '\n' +
                                'Cras nec porttitor mi, interdum laoreet metus. Donec accumsan convallis congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ullamcorper risus a pulvinar maximus. In ut condimentum sapien. Fusce vel egestas ipsum, nec gravida magna. Donec posuere malesuada nibh, porta vehicula purus congue nec. Sed vitae bibendum dolor, quis ultrices nibh. Praesent tempor magna suscipit, ultricies ante vel, feugiat magna. Nam vestibulum sapien et orci sollicitudin sodales. Pellentesque in dolor consequat diam eleifend vulputate sed et velit. Phasellus in mauris nec elit hendrerit posuere eget sodales nisl. Vestibulum ullamcorper elementum sodales. Nam dapibus, felis commodo volutpat vestibulum, tortor erat ornare turpis, eget malesuada magna dui ac diam. Phasellus vitae velit arcu. Curabitur ornare posuere facilisis.\n' +
                                '\n' +
                                'Vivamus eget orci pretium, convallis orci nec, congue ipsum. Sed nec sodales tellus. Suspendisse sed neque vel nibh hendrerit blandit. Donec varius ultrices nisi a vestibulum. In hac habitasse platea dictumst. Suspendisse potenti. Curabitur ut euismod erat, a molestie massa. Suspendisse posuere nulla est, et laoreet erat vestibulum porta. Mauris egestas augue eget imperdiet facilisis. Suspendisse eleifend dapibus felis, vitae varius augue suscipit sed. Nam quis nisi in orci euismod viverra at id ex. Nunc fermentum, metus eu rhoncus hendrerit, ligula ex posuere ipsum, nec volutpat sapien est nec nisl. Donec at lacinia augue. Fusce dictum lectus lectus, iaculis accumsan metus maximus nec. Suspendisse sollicitudin aliquet porta.\n' +
                                '\n' +
                                'Nullam pretium metus sit amet dictum cursus. Vivamus semper, nunc in egestas faucibus, risus sem varius ante, id consequat mauris ipsum at enim. Morbi vel libero vulputate metus aliquam hendrerit. Sed vitae urna non est posuere ullamcorper. Vivamus dictum congue mi, id vestibulum ex condimentum id. Nunc porttitor viverra massa, facilisis facilisis felis dignissim ac. Curabitur pulvinar pellentesque risus nec commodo. Nulla viverra tristique tortor vel tempor. Vivamus at purus sit amet lectus semper commodo. Nulla porttitor at libero ut molestie. Nullam sed ex eu erat auctor blandit a sit amet ex. Duis mollis tellus ac turpis ultrices auctor et eget felis. Quisque consectetur vestibulum aliquet. Nulla vitae lorem sed dolor elementum imperdiet. Quisque nec sagittis nulla, et pretium ante.\n' +
                                '\n' +
                                'Sed tincidunt, ligula vel laoreet maximus, diam risus tincidunt nulla, a commodo dolor lacus vulputate elit. Etiam laoreet arcu nisi, ut aliquam elit laoreet sed. Sed fringilla commodo convallis. Nullam et orci fringilla risus placerat efficitur. Vestibulum blandit, elit vel interdum suscipit, neque urna vestibulum arcu, id aliquet sem velit a quam. Mauris elementum auctor consectetur. Proin in congue libero, id iaculis dui. Aliquam ac felis ac ipsum blandit pharetra non in ex. Vestibulum sed porta turpis, in convallis diam. In non nisl ullamcorper, ullamcorper turpis non, congue lorem. Quisque urna diam, pellentesque non dolor ac, laoreet gravida neque.'
                        }
                    ]
                });
        }
    }
</script>

<style scoped lang="scss">

    /deep/ .post-item + .post-item {
        margin-top: 40px;
    }

    @media only screen and (max-width: 600px) {

        /deep/ .post-item + .post-item {
            margin-top: 0;
        }
    }

</style>