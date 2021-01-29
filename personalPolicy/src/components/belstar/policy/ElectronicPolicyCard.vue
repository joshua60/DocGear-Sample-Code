<template>
  <div class="w-11/12 flex justify-between mt-4 ml-3">
    <table cellspacing="0" class="table1 w-72">
      <tr>
        <td class="bgColor-2 font-bold font-simsun" width="50%">投保人姓名：{{dataset.Cont.LCCont_RenewalAccName}}</td>
        <td>性别：{{dataset.Cont.LCCont_InsuredSex}}</td>
      </tr>
      <tr>
        <td colspan="2">出生日期：{{dataset.Cont.LCCont_InsuredBirthDay}}</td>
          
      </tr>
      <tr>
        <td colspan="2">证件类型：{{dataset.Cont.AppntIDType}}</td>
          
      </tr>
      <tr>
        <td colspan="2">证件号码：{{dataset.Cont.LCCont_AppntIDNo}}</td>
          
      </tr>
      <tr>
        <td colspan="2">证件有效期至：{{dataset.Cont.LCCont_AppntIDValidDate}}</td>
          
      </tr>
      <tr>
        <td valign="top">国籍：{{dataset.Cont.LCCont_AppntNativeplace}}</td>
        <td>户籍：{{dataset.Cont.LCCont_AppntHomeAddress}}</td>
      </tr>
      <tr>
        <td>学历：{{dataset.Cont.LCCont_AppntDegree}}</td>
        <td>婚姻状况：{{dataset.Cont.LCCont_AppntMarriage}}</td>
      </tr>
      <tr>
        <td colspan="2" class="bgColor-2 font-bold">与被保险人关系：{{dataset.Cont.LCCont_InsuredRelationtoappnt}}</td>
          
      </tr>
      <tr>
        <td>职业名称：{{dataset.Cont.LCCont_InsuredOccupationName}}</td>
        <td>最高职业代码：{{dataset.Cont.LCCont_InsuredOccupationCode}}</td>
      </tr>
      <tr>
        <td colspan="2">工作单位：{{dataset.Cont.LCCont_InsuredGrpname}}</td>
          
      </tr>
      <tr>
        <td colspan="2">E-mail：{{dataset.Cont.LCCont_InsuredEMail}}</td>
          
      </tr>
      <tr>
        <td colspan="2">固定电话：{{dataset.Cont.LCCont_InsuredFixPhone}}</td>
          
      </tr>
      <tr>
        <td colspan="2">移动电话：{{dataset.Cont.LCCont_InsuredMobile}}</td>
          
      </tr>
      <tr>
        <td colspan="2">现住址：{{dataset.Cont.LCCont_InsuredHomeAddress}}</td>
          
      </tr>
      <tr>
        <td colspan="2">通讯住址：{{dataset.Cont.LCCont_AppntPostaladdress}}</td>
          
      </tr>
      <tr>
        <td colspan="2">邮政编码：{{dataset.Cont.LCCont_AppntZipcode}}</td>
          
      </tr>
    </table>
    <table cellspacing="0" class="table1 w-72">
      <tr>
        <td class="bgColor-2 font-bold font-simsun" width="50%" >被保险人姓名：{{dataset.Cont.LCCont_InsuredName}}</td>
        <td>性别：{{dataset.Cont.LCCont_InsuredSex}}</td>
      </tr>
      <tr>
        <td colspan="2">出生日期：{{dataset.Cont.LCCont_InsuredBirthDay}}</td>
          
      </tr>
      <tr>
        <td colspan="2">证件类型：{{dataset.Cont.InsureIDType}}</td>
          
      </tr>
      <tr>
        <td colspan="2">证件号码：{{dataset.Cont.LCCont_InsuredIDNo}}</td>
          
      </tr>
      <tr>
        <td colspan="2">证件有效期至：{{dataset.Cont.CValiDate}}</td>
          
      </tr>
      <tr>
        <td valign="top">国籍：{{dataset.Cont.LCCont_InsuredNativeplace}}</td>
        <td>户籍：{{dataset.Cont.LCCont_InsuredHomeAddress}}</td>
      </tr>
      <tr>
        <td>学历：{{dataset.Cont.LCCont_InsuredDegree}}</td>
        <td>婚姻状况：{{dataset.Cont.LCCont_InsuredMarriage}}</td>
      </tr>
      <tr>
        <td colspan="2" class="bgColor-2 font-bold">与被保险人关系：{{dataset.Cont.LCCont_InsuredRelationtoappnt}}</td>
          
      </tr>
      <tr>
        <td>职业名称：{{dataset.Cont.LCCont_InsuredOccupationName}}</td>
        <td>最高职业代码：{{dataset.Cont.LCCont_InsuredOccupationCode}}</td>
      </tr>
      <tr>
        <td colspan="2">工作单位：{{dataset.Cont.LCCont_InsuredGrpname}}</td>
          
      </tr>
      <tr>
        <td colspan="2">E-mail：{{dataset.Cont.LCCont_InsuredEMail}}</td>
          
      </tr>
      <tr>
        <td colspan="2">固定电话：{{dataset.Cont.LCCont_InsuredFixPhone}}</td>
          
      </tr>
      <tr>
        <td colspan="2">移动电话：{{dataset.Cont.LCCont_InsuredMobile}}</td>
          
      </tr>
      <tr>
        <td colspan="2">现住址：{{dataset.Cont.LCCont_InsuredHomeAddress}}</td>
          
      </tr>
      <tr>
        <td colspan="2">通讯住址：{{dataset.Cont.LCCont_AppntPostaladdress}}</td>
          
      </tr>
      <tr>
        <td colspan="2">邮政编码：{{dataset.Cont.LCCont_AppntZipcode}}</td>
          
      </tr>
    </table>
  </div>
</template>

<script>
  export default{
   props:['dataset'] 
  }
</script>

<style scoped>
  .bgColor-2 {
    background-color: rgba(85, 179, 220, 0.4);
  }
  .table1 {
    border: 2px solid #979797;
  }
  table.table1 tr td {
    border-bottom: 1px solid #979797;
    @apply text-xs pl-2 h-6 leading-5;
  }
  
  table.table1>tr>td:not(:first-child) {
    border-left: 1px solid #979797;
  }
</style>
