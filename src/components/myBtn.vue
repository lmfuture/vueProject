<template>
    <div style="padding-top: 60px">
        <p></p>
        <my-header :title='iTitle'></my-header>
        <my-tabbar :idx="3"></my-tabbar>
        <wv-swipe :height="130" :autoplay="4000">
            <wv-swipe-item style="background-color: #f44336"></wv-swipe-item>
            <wv-swipe-item style="background-color: #ffc107"></wv-swipe-item>
            <wv-swipe-item style="background-color: #03a9f4"></wv-swipe-item>
        </wv-swipe>
        <br/>
        <p>{{state1}}</p>
        <p>{{state2}}</p>
        <p>{{state3}}</p>
        <p>{{state4}}</p>
        <wv-button type="primary">vuex数据(stateNum)+1</wv-button>
        <wv-button type="warn">vuex数据(stateNum)-1</wv-button>
        <br>
        <div data-v-b377b1f6="" data-v-ce35610e="" class="weui-grids">
            <div data-v-95f6105a="" data-v-ce35610e="" class="weui-grid demo-grid-item" data-v-b377b1f6=""
                 @click='toList()'>
                <div data-v-95f6105a="" class="weui-grid__icon">
                    <wv-icon type="success"></wv-icon>
                </div>
                <p data-v-95f6105a="" class="weui-grid__label">
                    <span data-v-ce35610e="" data-v-95f6105a="">vue-router 跳转</span>
                </p>
            </div>
            <div data-v-95f6105a="" data-v-ce35610e="" class="weui-grid demo-grid-item" data-v-b377b1f6="">
                <div data-v-95f6105a="" class="weui-grid__icon">
                    <wv-icon type="info"></wv-icon>
                </div>
                <p data-v-95f6105a="" class="weui-grid__label">
                    <span data-v-ce35610e="" data-v-95f6105a="">vuex数据：{{count}}</span>
                </p>
            </div>
            <div data-v-95f6105a="" data-v-ce35610e="" class="weui-grid demo-grid-item" data-v-b377b1f6="">
                <div data-v-95f6105a="" class="weui-grid__icon">
                    <wv-icon type="warn"></wv-icon>
                </div>
                <p data-v-95f6105a="" class="weui-grid__label">
                    <span data-v-ce35610e="" data-v-95f6105a="">vuex数据：</span>
                </p>
            </div>
            <div data-v-95f6105a="" data-v-ce35610e="" class="weui-grid demo-grid-item" data-v-b377b1f6="">
                <div data-v-95f6105a="" class="weui-grid__icon">
                    <wv-icon type="waiting"></wv-icon>
                </div>
                <p data-v-95f6105a="" class="weui-grid__label">
                    <span data-v-ce35610e="" data-v-95f6105a="" @click='increase'>storeANum乘</span>
                </p>
            </div>
            <div data-v-95f6105a="" data-v-ce35610e="" class="weui-grid demo-grid-item" data-v-b377b1f6="">
                <div data-v-95f6105a="" class="weui-grid__icon">
                    <wv-icon type="search"></wv-icon>
                </div>
                <p data-v-95f6105a="" class="weui-grid__label">
                    <span data-v-ce35610e="" data-v-95f6105a="" @click='decrease'>storeBNum除</span>
                </p>
            </div>
            <div data-v-95f6105a="" data-v-ce35610e="" class="weui-grid demo-grid-item" data-v-b377b1f6=""
                 @click='toUpload'>
                <div data-v-95f6105a="" class="weui-grid__icon">
                    <wv-icon type="download"></wv-icon>
                </div>
                <p data-v-95f6105a="" class="weui-grid__label">
                    <span data-v-ce35610e="" data-v-95f6105a="">跳转列表加载</span>
                </p>
            </div>
        </div>

        <wv-group title="选择器示例">
            <wv-cell :title="title" is-link @click.native="fruitPickerShow = true"/>
            <wv-cell :title="dayAndTime[0]+' '+dayAndTime[1]" is-link @click.native="dayPickerShow = true"/>
        </wv-group>
        <wv-picker
                :visible.sync="fruitPickerShow"
                :columns="fruitColumns"
                value-key="name"
                @confirm="confirmPerson"
        />
        <wv-picker
                :visible.sync="dayPickerShow"
                :columns="dayColumns"
                @confirm="confirmDate"
        />
    </div>
</template>
<script type="text/javascript">
    import myTabbar from '@/components/tabbar'
    import myHeader from '@/components/header'
    import bus from '@/plugin/plugin.js'
    import {mapActions, mapState, mapGetters} from 'vuex'

    export default {
        created() {
            this.$bus.emit('sendParams', this.param);
        },
        components: {
            myTabbar, myHeader
        },
        mounted: function () {
        },
        computed: {
            count() {
                return this.$store.state.myvuex.num
            },
            ...mapState({
                state1: state => state.myvuex.num,
                state2: state => state.myvuex.Text
            }),
            ...mapGetters('myvuex', {
                state3: 'count',
                state4: 'text'
            })
        },
        methods: {
            toList: function () {
                console.log(this.$bus)
                this.$router.push({path: '/infiniteScroll', query: {id: this.$store.state.num}})
            },
            toUpload: function () {
                console.log(this.$bus)
                this.$router.push({path: '/loadMore', query: {id: this.$store.state.num}})
            },
            toJsx: function () {
                console.log(this.$bus)
                this.$router.push({path: '/jsx', query: {id: this.$store.state.num}})
            },
            onChange(picker, value) {
                this.$nextTick(() => {
                })
            },
            confirmPerson(picker, value) {
                this.$nextTick(() => {
                    console.log(picker.getValues()[0].name)
                    this.title = picker.getValues()[0].name;
                })
            },
            confirmDate(picker, value) {
                this.$nextTick(() => {
                    console.log(picker.getValues())
                    this.dayAndTime = picker.getValues();
                })
            },
            ...mapActions('myvuex', [
                'increase',
                'decrease'
                // 'chengfa',
                // 'chufa'
            ])
        },
        data() {
            return {
                fruitPickerShow: false,
                dayPickerShow: false,
                dayAndTime: ['星期一', '上午'],
                iTitle: '我的',
                title: 'Apple',
                fruit: [{name: 'Apple', age: 1}],
                fruitColumns: [
                    {
                        values: [
                            {
                                name: 'Apple',
                                price: 1.3
                            },
                            {
                                name: 'Banana',
                                price: 2.0
                            },
                            {
                                name: 'Orange',
                                price: 10
                            },
                            {
                                name: 'Pear',
                                price: 0.5
                            }
                        ]
                    }
                ],
                ticketColumns: [
                    {
                        values: [
                            '汽车票',
                            '飞机票',
                            '火车票',
                            '轮船票',
                            '其它'
                        ],
                        defaultIndex: 2
                    }
                ],
                dayColumns: [
                    {
                        values: [
                            '星期一',
                            '星期二',
                            '星期三',
                            '星期四',
                            '星期五',
                            '星期六',
                            '星期日'
                        ],
                        defaultIndex: 0
                    },
                    {
                        values: [
                            '上午',
                            '下午'
                        ],
                        defaultIndex: 0
                    }
                ],
                param: '由非父子组件传过来的参数'
            }
        }


    }
</script>

<style>
    .my-list {
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
    }
</style>