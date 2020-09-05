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
                <div
                        class="hamburger"
                        @click="openMenu"
                >
                    <i :class="['fa', 'fa-bars']"></i>
                </div>
                <div :class="['links', menuIsOpen ? 'open' : '']">
                    <div class="r">
                        <div class="c6 mc12">
                            <div
                                    class="close-bar"
                                    @click="closeMenu"
                            ></div>
                        </div>
                        <div class="c3 mc12">
                            <span class="link-item">
                                <router-link
                                        to="/blog"
                                        v-on:click.native="closeMenu"
                                >Blog</router-link>
                            </span>
                        </div>
                        <div class="c3 mc12">
                            <span class="link-item">
                                <router-link
                                        to="/blog/about"
                                        v-on:click.native="closeMenu"
                                >About</router-link>
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
        data() {
            return {
                menuIsOpen: false
            }
        },
        methods: {
            openMenu() {
                this.menuIsOpen = true;
            },
            closeMenu() {
                this.menuIsOpen = false;
            }
        }
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

        .hamburger {
            display: none;
            float: right;
            font-size: 30px;
            padding: 5px 5px 0;
        }

        .links {
            text-align: center;

            .close-bar {
                display: none;

                &:after {
                    content: 'X';
                    color: white;
                    float: right;
                    padding: 10px 20px;
                    font-size: 30px;
                }
            }

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

    @media only screen and (max-width: 600px) {
        .header-wrap {
            position: fixed;
            left: 0;
            right: 0;
            padding: 10px;
            margin-left: 0;
            z-index: 1;
            border-bottom: 1px solid #1c7ac2;
            background: #efefef;

            .hamburger {
                display: block;
            }

            .links {
                display: none;
                position: fixed;
                top: 0;
                bottom: 0;
                background: #000000de;
                color: white;
                left: 0;
                right: 0;
                text-align: left;

                &.open {
                    display: block;
                }

                .close-bar {
                    display: block;
                }

                .link-item {
                    text-decoration: none;
                    border-bottom: 1px solid white;
                    margin: 0 20px;

                    a {
                        color: white;
                        text-decoration: none;
                        font-size: 30px;
                    }

                }
            }
        }
    }
</style>