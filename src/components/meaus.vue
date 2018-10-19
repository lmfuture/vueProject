<template>
  <keep-alive>
    <el-tabs v-model="activeName" @tab-click="handleClick" id='el-tabs'>
        <el-tab-pane class='grid-content' :span="12" label="热播列表"  name="first" id="container" font='20'>
          <mt-button v-if='showBtn == 1' type="danger" @click='incress' style='width: 95%;height: 50px;'>浏览量加1(子传父)</mt-button>
          <mt-button v-else-if='showBtn == 2' type="danger" size='small' @click='incress' style='width: 85%;height: 50px;'>浏览量加2(子传父){{setDate.time}}</mt-button>

          <mt-button v-else='showBtn == 3' size='small' type="danger" @click='incress' style='width: 85%;height: 50px;'>浏览量加3(子传父)</mt-button>




        <!------------------------vuex练习-------------------------------->
          <h1>{{getterB}}</h1>
          <p>{{getterA}}</p>
          <p>{{stateshouye}}</p>
          <!-- <p>{{count}}</p> -->
          <p>{{stateObj}}</p>
          <mt-button  size='small' @click='increase' type="primary"  style='width: 50%;height: 50px;'>数字加</mt-button>

          <mt-button size='small' @click='decrease' type="danger" style='width: 50%;height: 50px;'>数字减</mt-button>



        <!------------------------vuex练习-------------------------------->



          <!-- <mt-button  size='small' @click='chengfa' type="primary"  style='width: 50%;height: 50px;'>数字乘</mt-button>

          <mt-button size='small' @click='chufa' type="danger" style='width: 50%;height: 50px;'>数字除</mt-button> -->

          <mt-button size='small' type="primary">通过bus接收来自非父子组件的参数</mt-button>
          <circle-menu class='fixedMeau' animate="animated jello" btn circle type="top" :number="3">
            <button class='floatButton' type="button" slot="item_btn"></button>
            <a slot="item_1" class="fa fa-twitter fa-lg" herf="#" >收藏</a>
            <a slot="item_2" class="fa fa-weixin fa-lg" herf="#" >订单</a>
            <a slot="item_3" class="fa fa-weibo fa-lg" herf="#" >客服</a>
          </circle-menu>
            <el-row>
              <el-col v-for='item in msg' :key='item.id' class='grid-content list-item' :span="24">
                <a :href="item.link_url">
                  <img class="grid-content grid-img" v-lazy="item.img_url">
                </a>
                <b class="name-movie">{{item.movieName}}</b>
                
                <a href="" v-show='showSea' style="font-size: 16px;">浏览数：{{parentMsg|fixedPoint}}(父传子)</a>
              </el-col>
            </el-row>
        </el-tab-pane>
        <el-tab-pane class='grid-content' @click='onClick' :span="12" label="免费在线" name="second">
            <carouse></carouse>
        </el-tab-pane>
    </el-tabs>
  </keep-alive>
</template>
<script>
  import carouse from '@/page/carouse'
  import CircleMenu from 'vue-circle-menu'
  import moment from 'moment'
  import {mapGetters,mapActions,mapState} from 'vuex'
  export default {
    name:'my-meau',
    props:['message'],
    components: {
      carouse,CircleMenu
    },
    data() {
      return {
        activeName: 'first',
        showVuexText:'打印来自vuex的提示',
        msg: {
        },
        button:'buttonStyle',
        parentMsg:this.message,
        colors:[ '#ffa500', '#A7425C', '#FFE26F', '#F3825F', '#F19584'],
        number:5,
        showBtn:2,
        showSea:true,
        setDate:{

        },
        getParam:''
      };
    },
    computed:{

      /*********************************vuex练习*********************************/
      ...mapGetters('shouye',{
         getterA:'count',
         getterB:'vueText'
      }),
      ...mapState({
          stateObj: state => state.myvuex.num,
          stateshouye: state => state.shouye.num
      })
      /*********************************vuex练习*********************************/


    },
    created:function(){
      let that = this;
      ///api/movie/in_theaters
      this.$http.get('../../static/json/movieList.json')
      .then(function(res){
          that.msg = res.data;
      });
      console.log(this.$bus)
      this.$bus.on('sendParams',(param) =>{
          this.getParam = param;
      })
    },
    mounted () {
        this.$set(this.setDate,'time',moment("2011-10-31", "YYYY-MM-DD").fromNow());
    },
    methods: {
      handleClick(tab, event) {
        
      },
      onClick:function(){
        
      },
      incress:function(){
        this.parentMsg++;
        this.$emit('incres-click',this.parentMsg);
      },
      addMsg:function(){

      },

      /*********************************vuex练习*********************************/
      ...mapActions('shouye',[
        'increase',
        'decrease',
        // 'chengfa',
        // 'chufa'
      ])
      /*********************************vuex练习*********************************/

    },
    beforeDestory:function(){
      this.$bus.off('sendParams')
    },
    filters:{
      fixedPoint:function(val){
          return val.toFixed(2);
      }
    }
  };

</script>

<style>
  *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }
    .list-item{
      height:auto;
      float: left;
      padding: 5px;
      box-shadow: 5px 5px 5px #17Ac3c;
      margin-bottom: 10px
    }
    .list-item img{
      display: inline-block;
      height:400px;
      width: 100%;
    }
    .name-movie{
      display: inline-block;
      height: 30px;
      width: 100%;
      line-height: 30px;
      font-size:20px;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .el-tabs__header{
      position: fixed;
      top: 60px;
      left: 0;
      right:0;
      padding: 0 24px;
      z-index: 3000;
      background: #fff;
    }
    .el-tabs{
      padding-top: 110px;
      padding-bottom: 80px;
      font-size: 30px;
    }
    .el-tabs__item{
      font-size:18px;
    }
    .fixedMeau{
      position: fixed;
      right:10px;
      bottom:20%;
      z-index: 5500;
    }
    /*.btn-toggle{
      border-radius: 50%;
    }*/
    .floatButton{
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
      background-color: none;
    }
    .fa-lg{
      font-size:16px;
      color: #fff;
      line-height: 48px;
      display: block;
      height: 100%;
      width:100%;
    }
    .icon-bars{
      position: absolute;
      top: 46%;
      right: 28%;
    }
    img[lazy='loaded'] {
      margin: auto;
    }
</style>

