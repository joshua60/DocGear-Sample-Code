<template>
  <div>
    <table class="m-auto w-11/12 text-sm" cellspacing="0">
    	<tr>
    		<td colspan="2">{{dataset.CONVER.LCCont_ComName}}</td>
    		<td class="font-bold pl-20">保单制单日期：{{getDate}}</td>
    	</tr>
    	<tr>
    		<td colspan="2">全国统一客户服务和客户维权电话: 63436699</td>
    		<td class="font-bold pl-20">保单提交日期：{{dataset.Cont.LCCont_SignDate}}</td>
    	</tr>
    	<tr>
    		<td class="w-1/12" style="vertical-align: top;"><span>地址：</span></td>
    		<td class="w-5/12">{{dataset.CONVER.LCCont_ComAddress}}</td>
    		<td></td>
    	</tr>
    </table>
  </div>
</template>

<script>
  export default{
    props:['dataset'],
    computed:{
    	getDate(){
    		let year= new Date().getFullYear()
    		let month = new Date().getMonth()+1
    		let day = new Date().getDate()
    		if(month<10){
    			month="0"+month
    		}
    		return year+'年'+month+'月'+day+'日'
    		
    	}
    }
  }
</script>

<style>
</style>
