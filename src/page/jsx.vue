<template>
	<div id="container">
		<my-jsx>
			我是slot内容
		</my-jsx>
	</div>
</template>
<style type="text/css">
	body,html,#container,#app{
		height: 100%;
		width: 100%;
		box-sizing: border-box;
	}
	#container{
		padding: 50px;
	}
	.foo{
		color: red;
	}
	.bar{
		font-size: 30px;
	}
</style>
<script>
	export default{
		data(){
			return {
				msg:'欢迎来到jsx页面'
			}
		},
		components:{
			'my-jsx':{
				data(){
					return {
						myComponentMsg:'我是子组建的信息'
					}
				},
				render(){
					return (<div onClick={this.textJsx} class={{foo:true,bar:true}} 
						style={{
							color:'#ffa500',
							fontSize:20
						}}
					 id='1' data-set='6'>{this.myComponentMsg===1?'组件myComponentMsg的值为1':'组件myComponentMsg的值为不为1'}<a onClick={this.textJsx}>go go go</a><slot></slot></div>)
				},
				methods:{
					textJsx:function(e){
						alert(111)
						e.stopPropagation()
					}
				}
			}
		}
	}
</script>