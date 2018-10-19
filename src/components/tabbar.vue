<template>
  <div class="footer">
      <div v-for='(item,index) of items' :class='[item.cls,{on:index === idx}]' @click="$router.push(item.push)">
        <img :src="index===idx?item.iconSelect:item.icon">
        <p :class="['colorChange',{on:index===idx}]" >{{item.name}}</p>
      </div>
  </div>
</template>

<script>
  export default{
    props:['idx'],
    data(){
      return {
        items:[{
          cls:"home",
          name:"首页",
          push:"/",
          icon:"../static/img/footer-bzx.svg",
          iconSelect:"../static/img/footer-bzx-active.svg"
        },
        {
          cls:"shares",
          name:"媒体",
          push:"/myorder",
          icon:"../static/img/footer-product.svg",
          iconSelect:"../static/img/footer-product-active.svg"
        },
        {
          cla:"community",
          name:"发现",
          push:"/active",
          icon:"../static/img/footer-zhanye.svg",
          iconSelect:"../static/img/footer-zhanye-active.svg"
        },
        {
          cla:"mine",
          name:"我的",
          push:"/my/:id/post/:param",
          icon:"../static/img/footer-my.svg",
          iconSelect:"../static/img/footer-my-active.svg"
        }]
      }
    }
  } 

</script>

<style scoped>
  .footer{
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  height: 60px;
  background: #fff;
  width: 100%;
  color: #333;
  z-index: 9000;
  border-top:1px solid #f5f5f5;
  }
  div{
    flex: 1;
    font-size: 14px;
  }
  div img{
    width: 30px;
    height: 30px;
    vertical-align: bottom;
  }
  .footer > div{
    padding-top: 5px;
    padding-bottom: 3px;
  }
  div p{
    color:#333;
    margin-bottom: 10px;
    font-family: PingFangSC-Medium, "微软雅黑", "microsoft yahei", sans-serif !important;
  }
  .on{
    color: #FFA312;
  }

</style>
