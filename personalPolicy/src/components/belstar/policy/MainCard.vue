<template>
  <div class="card bgColor-3 mx-auto p-6 w-11/12 text-xs">
  	<table width="50%" cellspacing="0">
  		<tr>
  			<td>投保人姓名</td>
  			<td class="font-simsun">{{dataset.Cont.LCCont_RenewalAccName}}</td>
  		</tr>
  		<tr>
  			<td>证件号码</td>
  			<td>{{dataset.Cont.LCCont_AppntIDNo}}</td>
  		</tr>
  		<tr>
  			<td>出生日期</td>
  			<td>{{dataset.Cont.LCCont_AppntBirthDay}}</td>
  		</tr>
  	</table>
  	<table width="50%" cellspacing="0">
  		<tr>
  			<td>被保险人姓名</td>
  			<td class="font-simsun">{{dataset.Cont.LCCont_InsuredName}}</td>
  		</tr>
  		<tr>
  			<td>证件号码</td>
  			<td>{{dataset.Cont.LCCont_InsuredIDNo}}</td>
  		</tr>
  		<tr>
  			<td>出生日期</td>
  			<td>{{dataset.Cont.LCCont_InsuredIDValidDate}}</td>
  		</tr>
  	</table>
  </div>
</template>

<script>
  export default{
    props:['dataset']
  }
</script>

<style>
  .card{
  	height:161.5px;
    display: flex;
  }
  .card table tr td:first-child{
    @apply font-bold;
  }
  .card table:first-child tr td:last-child{
    @apply pr-4;
    border-right: 2px solid #FFF;
  }
  .card table:last-child tr td:first-child{
    @apply pl-4;
    border-left: 2px solid #FFF;
  }
  .card table tr td{
    @apply h-8 font-sans;
  }
 .card table tr td:last-child{
  	@apply text-right w-7/12;
  }
</style>
