<template>
    <div id="app">
        <!-- <my-header></my-header> -->
        <keep-alive>
            <transition :name="transitionName">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
            </transition>
            <transition :name="transitionName">
                <router-view v-if="!$route.meta.keepAlive"></router-view>
            </transition>
        </keep-alive>

        <!-- <my-tabbar :idx="inDex"></my-tabbar> -->
    </div>
</template>
<script>
    import jquery from 'jquery'
    //import myTabbar from '@/components/tabbar';
    import myHeader from '@/components/header';

    export default {
        name: 'App',
        data() {
            return {
                transitionName: '',
                inDex: '0'
            }
        },
        components: {
            myHeader//myTabbar
        },
        created: function () {

        }
    }
</script>

<style>
    .mint-tabbar.is-fixed {
        z-index: 9999;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        text-align: center;
        color: #2c3e50;
    }

    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all 500ms;
        position: absolute;
    }

    .slide-left-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-right-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-right-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

</style>
