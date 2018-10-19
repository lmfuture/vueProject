<template>
    <div style="padding-top: 50px">
        <my-btn></my-btn>

    </div>
</template>
<script>
    import myBtn from '@/components/myBtn'

    export default {
        name: 'myIndex',
        data() {
            return {}
        },
        components: {
            myBtn
        },
        created: function () {
            //console.log(this.$route);//获取router中传递的参数
        },
        mounted: function () {

        }
    }
</script>