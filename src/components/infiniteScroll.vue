<template>
    <div>
        <!-- <my-header></my-header> -->
        <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <wv-group
                    title="无限滚动加载"
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading"
                    infinite-scroll-distance="10"
            >
                <wv-cell title="条目" v-for="item in list" :key="item" :value="item"/>
            </wv-group>
            <p v-show="loading" class="loading-tips">
                <wv-spinner type="snake" color="#444" :size="24"/>
            </p>
        </div>
        <!-- <my-tabbar></my-tabbar> -->
    </div>

</template>

<script>
    // import myTabbar from '@/components/tabbar';
    // import myHeader from '@/components/header';
    export default {
        data() {
            return {
                list: [],
                loading: false,
                allLoaded: false,
                wrapperHeight: 0
            }
        },
        components: {
            //myTabbar,myHeader
        },
        methods: {
            loadMore() {
                console.log('loading more')
                this.loading = true
                setTimeout(() = > {
                    let last = this.list[this.list.length - 1]
                    for(let i = 1;
                i <= 5;
                i++
            )
                {
                    this.list.push(last + i)
                }
                this.$nextTick(() = > {
                    this.loading = false
            })
            },
                2000
            )
            }
        },

        mounted() {
            // document.getElementsByClassName('weui-tabbar')[0].style.display='none';
            // document.getElementsByClassName('mint-header')[0].style.display='none';
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
            for (let i = 1; i <= 15; i++) {
                this.list.push(i)
            }
        }
    }
</script>