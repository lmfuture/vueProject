<template>
  <div>
    <my-header :title='iTitle'></my-header>
    <el-container class="hello">
      <el-main>
          <my-meau v-show='isShow' :message='count' @incres-click='countIncress'></my-meau>
      </el-main>
    </el-container>
    <my-tabbar :idx="0"></my-tabbar>
  </div>
</template>
<script>
  import myMeau from '@/components/meaus'
  import myTabbar from '@/components/tabbar'
  import myHeader from '@/components/header'

  export default {
    name: 'HelloWorld',
    components: {
      myMeau,myTabbar,myHeader
    },
    data () {
      return {
        count:888,
        isShow:true,
        iTitle:'首页'
      }
    },
    created:function(){
    },
    mounted:function(){
    },
    methods:{
        countIncress:function(childValue){
          this.count == childValue;
        },
        
    }
  }
</script>

<style lang="scss">
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }
    
    el-main{
      paddding-top:120px;
    }
   
</style>
<style scoped="">
  .el-header{
      line-height:60px;
      background:#F56C6C;
      position:fixed;
      top: 60px;
      left:0;
      right:0;
      z-index:2000;
    }
    .el-main{
      padding:0!important;
    }
    .el-tabs__content{
      padding: 0 20px!important;
    }
</style>