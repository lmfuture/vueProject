
<template>
  
  <div style="padding-top: 60px;padding-bottom: 80px;">
    <my-header :title='iTitle'></my-header>
    <my-tabbar :idx="1"></my-tabbar>
    <div class="nav">
      <mt-button type='danger' size="normal" @click.native.prevent="active = 'tab-container1'">音乐</mt-button>
      <mt-button type='primary' size="normal" @click.native.prevent="active = 'tab-container2'">视频</mt-button>
      <mt-button type='default' size="normal" @click.native.prevent="active = 'tab-container3'">图片</mt-button>
    </div>
    
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <!-- cell组件 -->
          <mt-cell title="">
              <aplayer
                :music="{
                  title: '春风吹',
                  artist: '方大同',
                  src: 'https://limingge.gitee.io/vueproject/春风吹(soul boy)-方大同.mp3',
                  pic: 'http://singerimg.kugou.com/uploadpic/softhead/400/20160628/20160628141254212230.jpg',
                  showLrc:true,
                  lrc:'',
                  theme:'red',
                  lrcType:3
                }"
              />
          </mt-cell>
          <mt-cell title="">
            <aplayer
                :music="{
                  title: '讲真的',
                  artist: '曾惜',
                  src: 'https://limingge.gitee.io/vueproject/%E8%AE%B2%E7%9C%9F%E7%9A%84.mp3',
                  pic: 'http://qukufile2.qianqian.com/data2/pic/cf4e12437532713eb540f33a5e8fa92b/600252480/600252480.jpg@s_1,w_225,h_225',
                  showLrc:true,
                  lrc:'https://limingge.gitee.io/vueproject/jzd.%20lrc',
                  theme:'#333',
                  lrcType:3
                }"
              />
          </mt-cell>

        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <!-- cell组件 -->
          <mt-cell title="">
            <d-player :options="{
                video: {
                  url: 'https://limingge.gitee.io/vueproject/1531298915454637.mp4',
                  pic: 'https://limingge.gitee.io/vueproject/WechatIMG1377.jpeg'
                },
                autoplay: false,
                contextmenu: [{
                  text: 'GitHub',
                  link: 'https://github.com/MoePlayer/vue-dplayer'
                }]
              }
            ">
            </d-player>
          </mt-cell>
          <!-- cell组件 -->
          <mt-cell title="">
            <d-player :options="{
                video: {
                  url: 'https://limingge.gitee.io/vueproject/1531299094970241.mp4',
                  pic: 'https://limingge.gitee.io/vueproject/WechatIMG1377.jpeg'
                },
                autoplay: false,
                contextmenu: [{
                  text: 'GitHub',
                  link: 'https://github.com/MoePlayer/vue-dplayer'
                }]
              }
            ">
            </d-player>
          </mt-cell>
          <!-- cell组件 -->
          <mt-cell title="">
            <d-player :options="{
                video: {
                  url: 'https://limingge.gitee.io/vueproject/1531299115554912.mp4',
                  pic: 'https://limingge.gitee.io/vueproject/WechatIMG1377.jpeg'
                },
                autoplay: false,
                contextmenu: [{
                  text: 'GitHub',
                  link: 'https://github.com/MoePlayer/vue-dplayer'
                }]
              }
            ">
            </d-player>
          </mt-cell>
          <!-- cell组件 -->
          <mt-cell title="">
            <d-player :options="{
                video: {
                  url: 'https://limingge.gitee.io/vueproject/1531299150673548.mp4',
                  pic: 'https://limingge.gitee.io/vueproject/WechatIMG1377.jpeg'
                },
                autoplay: false,
                contextmenu: [{
                  text: 'GitHub',
                  link: 'https://github.com/MoePlayer/vue-dplayer'
                }]
              }
            ">
            </d-player>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <!-- cell组件 --> 
          <mt-cell  title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- <dplayer ref="player"></dplayer> -->
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script>

  import aplayer from 'vue-aplayer';
  import VueDPlayer from 'vue-dplayer'
  import 'vue-dplayer/dist/vue-dplayer.css'
  import myTabbar from '@/components/tabbar'
  import myHeader from '@/components/header'
  export default {
    name: 'myOrder',
    data() {
      return {
        active: 'tab-container1',
        iTitle:'媒体'
      }
    },
    components:{
      'aplayer':aplayer,
      'd-player': VueDPlayer,
      'my-tabbar':myTabbar,
      'myHeader':myHeader
    },
    methods:{
      play() {
        console.log('play callback')
      }
    },
    mounted() {
      // const player = this.$refs.player.dp
      // player.play()
      // setTimeout(() => {
      //   player.pause()
      // }, 2000)
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .mint-cell-title{
    display: none;
  }
  .aplayer,.mint-cell-value{
    width: 100%
  }
  .mint-tab-container{
    min-height: 500px;
  }
  .dplayer{
    margin-bottom: 20px;
  }
  .nav{
    height: 50px;
    width:100%;
    margin-bottom: 10px;
  }
  .nav .mint-button{
    width: 30%;
    outline: none;
    height: 100%;
  }
</style>
