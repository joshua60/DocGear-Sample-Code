<template>
  <table class="table2 w-11/12 text-xs text-center mt-3 ml-3" cellspacing="0">
    <thead>
      <tr>
        <td>险种名称</td>
        <td width="17%">
          <div >基本保险金额（元）<br>/份数/档</div>
        </td>
        <td width="14%">保险费（元）</td>
        <td>交费期间</td>
        <td>保险期间</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in objToArr(dataset.RISKALL.ROW)" :key="index">
        <td>{{item.COL1}}</td>
        <td>{{item.COL2}}</td>
        <td>{{item.COL3}}</td>
        <td>{{item.COL5}}</td>
        <td>{{item.COL4}}</td>
      </tr>
      <tr v-if="7-objToArr(dataset.RISKALL.ROW).length>0" v-for="(item,index) in 7-objToArr(dataset.RISKALL.ROW).length"
        :key="index">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
  
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">
          <b>首期保险费合计:</b>
        </td>
      </tr>
  
      <tr>
        <td>交费频率: {{dataset.Cont.LCCont_PayMode}}</td>
        <td colspan="2" width="18%">首期交费方式: {{dataset.Cont.LCCont_NewPayMode}}</td>
  
        <td colspan="2">万能保险追加保险费:&emsp;{{dataset.Cont.AddMoney}}&emsp;元</td>
  
      </tr>
      <tr>
        <td colspan="5">
          <div><b>如投保年金保险</b>，年金/祝寿金 领取年龄:&emsp;&emsp;&emsp;周岁，领取方式: </div>
          <div><b>如投保分红保险</b>，红利领取方式:</div>
        </td>
      </tr>
  
      <tr>
        <td colspan="2">
          <div>续期交费方式:{{dataset.Cont.LCCont_PayLocation}}</div>
          <div>划款银行:{{dataset.Cont.LCCont_RenewalBankName}}</div>
        </td>
        <td colspan="3" class="pt-4 pl-0">
          续期转账账号:{{dataset.Cont.LCCont_RenewalBankAccNo}}</td>
      </tr>
      <tr>
        <td colspan="2">一年期主险/一年期附加险是否自动申请续保:</td>
  
        <td colspan="3" class="pl-0">目前被保险人是否享有社会医疗保险或公费医疗保障:是</td>
  
      </tr>
      <tr>
        <td colspan="5">
          如投保万能保险，万能险可投资账户分配比例: <br>
          1、各账户的分配请遵循我公司的有关账户分配的相关规则，且各账户的比例之和应为100%; <br>
          2、如该项未填写，则您的可投资保险费按照100%进入稳健型子账户。
        </td>
  
      </tr>
  
    </tfoot>
  </table>
</template>

<script>
  export default{
    props:['dataset']
  }
</script>

<style scoped>
  .table2 {
    border-top: 1.5px solid #55B3DC;
  }
  .table2>thead>tr>td {
    @apply text-center;
    border: 1.5px solid #55B3DC;
  }
  .table2 tbody tr td {
    @apply h-5;
    border-right: 1.5px solid #55B3DC;
    border-left: 1.5px solid #55B3DC;
  }
  
  .table2 tbody tr:nth-child(odd) {
    background: rgba(242, 242, 242, 1);
  }
  
  .table2 tfoot tr td{
    @apply text-left text-xs leading-6 pl-1;
  }
  
  .table2>tfoot tr:not(:last-child) td {
    border-bottom: 1.5px solid rgba(85, 179, 220, 1);
  }
  
  .table2 tfoot>tr:first-child>td {
    background: rgba(85, 179, 220, 0.6);
    border-top: 1.5px solid rgba(85, 179, 220, 1);
  }
</style>
