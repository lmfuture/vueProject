<template>
  
	<div class="amap-page-container" style="width: 100%">
    <my-header :title='title'></my-header>
	  <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap vid="amap" :plugin="plugin" :zoom="zoom" :center="mapCenter" class="amap-demo">
      	<el-amap-marker v-for="marker in markers" :key='marker[1]' :position="marker" ></el-amap-marker>
      	<el-amap-info-window
          :position="currentWindow.position"
          :content="currentWindow.content"
          :visible="currentWindow.visible"
          :events="currentWindow.events">
        </el-amap-info-window>
      </el-amap>
      <div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
      </div>
      <mt-button type='danger' size="small" @click="switchWindow(1)">找到天安门</mt-button>
      <mt-button type='primary' size="small" @click="switchWindow(2)">找到北京西站</mt-button>
      <my-tabbar :idx="2"></my-tabbar>
    </div>
</template>
<script>
  import myTabbar from '@/components/tabbar'
  import myHeader from '@/components/header'
	export default {
	  name:'myActive',
    components: {
      myTabbar,myHeader
    },
	  data () {
	  	let self = this;
        return {
          zoom: 10,
          showShadow:true,
          mapCenter: [116.4953569000,39.8038140400],
          lng: 0,
          lat: 0,
          loaded: false,
          title:'发现',
          markers: [
            [116.4953569000, 39.8038140400],
            [116.3866422800, 39.9083017400],
            [116.3127130800, 39.8941500700]
          ],
          plugin: [{
            pName: 'ToolBar',
            events: {
              init(instance) {
                //console.log(instance);
              }
            }
          },
          {
            pName: 'Geolocation',
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                	//console.log(result)
                  if (result && result.position) {
                    self.lng = result.position.lng;
                    self.lat = result.position.lat;
                    self.mapCenter = [self.lng, self.lat];
                    self.loaded = true;
                    self.$nextTick();
                  }
                });
              }
            }
          }],
          windows: [
            {
              position: [116.4953569000, 39.8038140400],
              content: '张帅哥在这里!!!',
              visible: true,
              events: {
                close() {
                  console.log('close infowindow1');
                }
              }
            },
            {
              position: [116.3866422800, 39.9083017400],
              content: '天安门在这里!!!',
              visible: true,
              events: {
                close() {
                  console.log('close infowindow1');
                }
              }
            },
            {
              position: [116.3127130800, 39.8941500700],
              content: '北京西站在这里!!!',
              visible: true,
              events: {
                close() {
                  console.log('close infowindow1');
                }
              }
            }
          ],
          searchOption: {
            city: '郑州',
            citylimit: false
          },
          slotWindow: {
            position: [116.2579298500, 31.21515044]
          },
          currentWindow: {
            position: [0, 0],
            content: '',
            events: {},
            visible: false
          }
        }
      },
      mounted() {
        this.currentWindow = this.windows[0];
        var $that = this;
        document.getElementsByTagName('input')[0].oninput=function(){
        	$that.searchOption.city=this.value;
        }
      },
      methods: {
        addMarker: function() {
          let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
          let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
          this.markers.push([lng, lat]);
        },
        onSearchResult(pois) {
          let latSum = 0;
          let lngSum = 0;
          if (pois.length > 0) {
            pois.forEach(poi => {
              let {lng, lat} = poi;
              lngSum += lng;
              latSum += lat;
              this.markers.push([poi.lng, poi.lat]);
            });
            let center = {
              lng: lngSum / pois.length,
              lat: latSum / pois.length
            };
            this.mapCenter = [center.lng, center.lat];
          }
        },
        switchWindow(tab) {
          this.currentWindow.visible = false;
          this.$nextTick(() => {
            this.currentWindow = this.windows[tab];
            this.currentWindow.visible = true;
          });
        }
      }
	};
</script>
<style>
	.amap-page-container{
		height:450px;
	}
  .el-container,.el-main{
    width:100%;
  }
	.el-vue-amap-container, .el-vue-amap-container .el-vue-amap{
		padding-top:70px;
	}
	/*.amap-demo {
      height: 300px;
    }*/
    .amap-maps{
      height: 400px;
    }

    .search-box {
      position: fixed;
      top: 65px;
      left: 5px;
    }

    .amap-page-container {
      position: relative;
    }
	.el-vue-search-box-container{
		border: 1px solid #eee;
		border-radius: 3px;
		width: 100%;
	}
	.amap-info-content{
		color: red;
	}
  .amap-geolocation-con{
    bottom:40px!important;
  }
  .amap-touch-toolbar .amap-zoomcontrol{
    bottom:-70px;
  }
</style>
