<template>
    <div
            class="header-wrap"
    >
        <Row>
            <div class="c8">
                <div class="blog-title">
                    Four In Faith
                </div>
            </div>
            <div class="c3">
                <div class="links">
                    <div class="r">
                        <div class="c6"></div>
                        <div class="c3">
                            <span class="link-item">
                                <router-link to="/">Blog</router-link>
                            </span>
                        </div>
                        <div class="c3">
                            <span class="link-item">
                                <router-link to="/about">About</router-link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Row>
    </div>
</template>

<script>
    import Row from "./common/Row";

    export default {
        name: "PageHeader",
        components: {Row},
    }
</script>

<style scoped lang="scss">
    .header-wrap {
        position: fixed;
        width: 100%;
        padding: 10px 10px 0;
        margin-left: 10px;
        z-index: 1;
        border-bottom: 1px solid $app-theme-base;
        background: $page-bg;

        .blog-title {
            font-size: 36px;
        }

        .links {
            text-align: center;

            .link-item {
                text-decoration: underline;
                display: block;
                padding-top: 15px;
                cursor: pointer;

                a {
                    color: black;

                    &:hover {
                        color: $app-theme-base;
                    }
                }
            }
        }
    }
</style>