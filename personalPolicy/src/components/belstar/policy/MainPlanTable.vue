<template>
  <div>
    <table class="w-11/12 text-xs m-auto border-gray" cellspacing="0">
    	<tr class="h-14">
    		<td class="border-gray">
    			<p class="font-bold m-1">险种名称：</p>
    			<p class="my-2 text-right mr-1">{{dataset.Cont.RiskName}}</p>
    		</td>
    		<td class="border-gray w-2/12">
    			<p class="font-bold m-1">基本保险金额：</p>
    			<p class="my-2 text-right mr-1">{{dataset.Cont.SumMoney}}</p>
    		</td>
    		<td class="border-gray w-2/12">
    			<p class="font-bold m-1">保险费：</p>
    			<p class="my-2 text-right mr-1">{{dataset.Cont.LCCont_Prem}}</p>
    		</td>
    		<td class="border-gray w-2/12">
    			<p class="font-bold m-1">保险期间：</p>
    			<p class="my-2 text-right mr-1">{{dataset.Cont.InsureTerm}}</p>
    		</td>
    		<td class="border-gray w-2/12">
    			<p class="font-bold m-1">交费期间：</p>
    			<p class="my-2 text-right mr-1">{{dataset.Cont.PayTerm}}</p>
    		</td>
    	</tr>
    	<tr class="h-14">
    		<td colspan="2" class="border-gray">
    			<p class="font-bold m-1">交费频次：</p>
    			<p class="my-2 text-right mr-1">{{dataset.Cont.LCCont_PayMode}}</p>
    		</td>
    		
    		<td colspan="3" class="bgColor-3 border-gray">
    			<p class="font-bold m-1">保险费合计：</p>
    			<p class="my-2 text-right mr-1">{{dataset.Cont.CPrem}}（RMB: {{dataset.Cont.LCCont_Prem}}）</p>
    		</td>
    		
    	</tr>
    </table>
  </div>
</template>

<script>
  export default{
    data(){
      return{}
    },
    props:['dataset']
  }
</script>

<style scoped>
  
</style>
