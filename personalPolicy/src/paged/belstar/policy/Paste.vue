<template>
  <!-- 粘贴页 -->
	<a4-page id="paste">
		<template slot="content">
      <div>
			<div class="title3 w-full text-center text-white bgColor-1">批单、续期保险费发票粘贴页</div>
      </div>
		</template>
	</a4-page>
</template>

<script>
	import a4Page from '../../../layout/a4Page.vue'
	export default{
		data(){
			return{
				isPage:true,
			}
		},
		props:[],
		components:{
			a4Page
		}
	}
</script>

<style scoped>
	
</style>
