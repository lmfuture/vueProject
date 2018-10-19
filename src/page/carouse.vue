<template>
  <el-carousel :interval="4000" type="card" height="280px">
    <el-carousel-item v-for="item in freemovie" :key="item">
      <img :src="item" alt="" height="100%" width="100%">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
	export default {
		name:'carouse',
    data(){
      return {
         freemovie:['http://file.homeins.cn/FsGvWU-VhcEkBNUsxRmif0xD12HR','http://file.homeins.cn/FpAVSnGag3e3Yr1CWAbx_GcP2bwh','http://file.homeins.cn/FlFYTtAwh0cduetWyjV2iUYT93bk','http://file.homeins.cn/FlmCqjwipXY7RsFgip1rYhnes4Oa','http://file.homeins.cn/Fo0iQ_1OF59ZTrWwBAIGudmrtrvZ','http://file.homeins.cn/Fhcig5MC21zt4rxf5xxTLqucpgx8']
      }
    }
	}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>