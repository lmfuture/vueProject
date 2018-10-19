<template>
    <mt-header :title='iTitle'>
        <router-link to='' slot="left">
            <mt-button icon="back" @click='backPage()'>返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right" @click='showSheet'>
            <mt-actionsheet :actions="dataMsg" v-model="sheetVisible"></mt-actionsheet>
        </mt-button>
    </mt-header>
</template>

<script>
    export default {
        name: 'myHeader',
        props: ['title'],
        data() {
            return {
                dataMsg: [{
                    name: '拍照',
                    method: this.getCamera	// 调用methods中的函数
                }, {
                    name: '从相册中选择',
                    method: this.showPhoto	// 调用methods中的函数
                }],
                sheetVisible: false,
                iTitle: this.title
            }
        },
        methods: {
            backPage: function () {
                this.$router.go(-1);
            },
            showSheet: function () {
                this.sheetVisible = true;
            },
            showPhoto: function () {

            }
        }
    }
</script>
<style>
    .mint-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 5000;
        height: 60px;
        font-size: 18px;
    }
</style>
