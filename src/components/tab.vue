<template>
    <div class="tab-group">
        <ul class="tab">
            <li v-bind:class='{active:!isChange}'>
                <router-link to="/movieList">影片</router-link>
            </li>
            <li v-bind:class='{active:isChange}'>
                <router-link to="/cinemaList">影院</router-link>
            </li>
        </ul>
        <div class="active-bar" v-bind:class="{activeChage:isChange}"></div>
    </div>
</template>

<script>
    export default {
        name: 'tab-group',
        watch: {
            '$route': 'tabActiveSlider'
        },
        data() {
            return {
                'isChange': false
            }
        },
        methods: {
            'tabActiveSlider': function () {
                this.isChange = !this.isChange
            }
        },
        created: function () {
            if (this.$route.path == '/cinemaList') {
                this.isChange = true;
            }
        }
    }
</script>

<style>
    <
    style scoped > .tab-group {
        position: relative;
        background: #fff;
        margin-bottom: 0.125rem;
    }

    .tab {
        display: box;
        display: -webkit-box;
    }

    .tab li {
        box-flex: 1;
        -webkit-box-flex: 1;
        text-align: center;
        height: 1.09375rem;
        line-height: 1.09375rem;
        text-align: center;
        font-size: 0.4375rem;
    }

    .tab li.active a {
        color: #e54847;
    }

    .tab li a {
        display: block;
    }

    .active-bar {
        position: absolute;
        height: 0.09375rem;
        background: #e54847;
        width: 50%;
        left: 0;
        bottom: -0.09375rem;
        transition: all .3s;
    }

    .activeChange {
        left: 50%;
    }
</style>
</style>