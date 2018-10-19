<template>
	<div class="container">
		<button>{{msg}}{{userId}}</button>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'fullPage',
		data(){
			return {
				msg:'子页面',
				userId:''
			}
		},
		mounted:function(){
			this.userId = this.$route.query.id;
		}
	}
</script>
<style>
	
</style>