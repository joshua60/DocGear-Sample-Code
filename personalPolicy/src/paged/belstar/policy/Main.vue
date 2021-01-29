<template>
  <!-- 主单页 -->
		<a4-page  id="main">
			<template slot="content">
        <div>
				<div class="w-11/12 h-10 m-auto mt-5 text-white text-right bgColor-1 font-bold fontSize3 leading-10 pr-6">保险单号: {{dataset.Cont.LCCont_ContNo}}</div>
				<div class="mt-6 ml-8 mb-4 font-bold" >投被保人资料</div>
				<main-card :dataset="dataset"></main-card>
				<div class="mt-6 ml-8 mb-4 font-bold">保险计划</div>
				<main-plan-table :dataset="dataset"></main-plan-table>
				<div class="mt-6 ml-8 mb-4 font-bold h2">身故保险金受益人资料</div>
				<main-benef-table :dataset="dataset"></main-benef-table>
				<div class="mt-6 ml-8 mb-4 font-bold h3">特别约定</div>
				<div class="text-xs w-11/12 m-auto">
					1.自投保人签收保险单之日起15日内，如收费不成功，此保险单自动作废且我公司自始不承担保险责任。<br>
					2.公司在收取首期保费后，本保险合同的生效日期以2019年03月20日作为生效日期。<br>
					(本栏以下空白)
				</div>
				<div class="bgColor-1 h-1 mb-2 mx-auto mt-40 w-11/12"></div>
				<main-sign-date :dataset="dataset"></main-sign-date>
				<div class="text-xs text-center mt-8">为确保您的保单权益，请及时拨打本公司服务电话、登录网站或到柜台进行查询，核实保单信息。</div>
       </div>
			</template>
		</a4-page>
</template>

<script>
	import a4Page from '../../../layout/a4Page.vue';
  import MainCard from '@/components/belstar/policy/MainCard.vue';
  import MainPlanTable from '@/components/belstar/policy/MainPlanTable.vue';
  import MainBenefTable from '@/components/belstar/policy/MainBenefTable.vue';
  import MainSignDate from '@/components/belstar/policy/MainSignDate.vue'
	export default{
		data(){
			return {
				
			}
		},
		components:{
			a4Page,
      //卡片
      MainCard,
      //主单页计划表格
      MainPlanTable,
      //主单页受益表格
      MainBenefTable,
      //主单页生效日期
      MainSignDate
		},
		props:['dataset']
	}
</script>

<style scoped>

</style>
