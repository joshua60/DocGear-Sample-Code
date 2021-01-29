<template>
  <!-- 回执页 -->
  <a4-page id="receipt">
    <template slot="content">
      <div class="relative leading-6 text-xs">
        <div class="text-sm font-bold absolute right-16">保险公司联</div>
        <div class="w-full text-center flex justify-between items-center pt-6">
          <div class="bgColor-1 h-3 w-56"></div>
          <div class="text-2xl font-bold px-9">保险合同签收回执</div>
          <div class="bgColor-1 h-3 w-56"></div>
        </div>
        <div class="w-full pl-8 font-sans mt-12">
          <div class="font-simsun">{{dataset.Cont.LCCont_AppntName}}&nbsp;先生：</div>
          <div class="text-indent-2">您好！</div>
          <div class="text-indent-2">感谢您选择百星人寿保险股份有限公司为您服务!</div>
          <div class="text-indent-2">根据您的申请，我公司已签发{{dataset.Cont.LCCont_ContNo}}号保险单，请您审核。如您对投保单及保险合同</div>
          <div>上的各项内容确认无误，并已知晓您的各项权利和义务，敬请在投保人签章处签名并注明签署日期，以保护您的权益。</div>
          <div class="text-indent-2"> 如您对上述事项有任何疑问，欢迎您随时来电或与您的代理人联系，我们将竭诚为您服务。 </div>
          <div class="text-indent-2">祝您事业发达，身体健康!</div>
        </div>
        <div class="font-bold text-indent-2 pl-8 pt-10 pb-2">为确保您的保单权益，请及时拨打本公司服务电话、登录网站或到柜台进行查询，核实保单信息。</div>
        <div class="flex justify-between px-5 mt-6">
          <div class="p-4 w-80 relative">
            <div class="absolute bgColor-1 w-1 h-20 bottom-0 left-0"></div>
            <div class="absolute bgColor-1 w-32 h-1 bottom-0 left-0"></div>
            <div class="absolute bgColor-1 w-32 h-1 top-0 right-0"></div>
            <div class="absolute bgColor-1 w-1 h-20 right-0 top-0"></div>
            <div>代理人：{{dataset.receipt.AgentEXName}}（{{dataset.receipt.AgentName}}）</div>
            <div>销售机构：{{dataset.receipt.BranchAttr}}</div>
            <div>管理机构代码：{{dataset.Cont.ManageComCode}}</div>
            <div>管理机构名称：{{dataset.Cont.ManageComName}}</div>
          </div>
          <div class="font-bold py-8">
            <div>百星保险全国客户服务电话 400-510-5058</div>
            <div>公司网址:www. belstar.com </div>
            <div>公司地址:北京市通州区嘉创路10号枢密院D3栋</div>
          </div>
        </div>
        <div class="bgColor-3 py-5 px-8 mt-8">
          <div>本人在此签名确认以示对投保单和保单全部内容之理解和认可：</div>
          <div>本人已收到百星人寿{{dataset.Cont.LCCont_ContNo}}号保险合同<span class="font-bold font-simsun">（投保人：{{dataset.Cont.LCCont_RenewalAccName}}，被保险人：{{dataset.Cont.LCCont_AppntName}}）</span>的合同正本，确认保险合同材料齐全，投保人、被保人、受益人信息准确，已阅读并理解条款内容，知晓本人的权利与义务及签收保单后开始计算犹豫期。</div>
          <div class="circle-1">备注：若您此前已签收完电子回执，则本《保险合同签收回执》作废，您无需再次签收，犹豫期自电子回执签收次日起计算</div>
          <div class="text-right text-xs pr-32">投保人签章：</div>
          <div class="text-right text-xs pr-2">签字日期：<span class="w-8 inline-block"></span>年<span class="w-8 inline-block"></span>月<span
              class="w-8 inline-block"></span>日</div>
        </div>
        <div class="w-full border-dashed border-1 my-5"></div>
        <div class="text-sm font-bold text-right pr-12">（保险公司填写联）</div>
        <div class="ml-16 mt-10">
          <div>保单号：</div>
          <div>代理人：</div>
          <div>保险公司签收人：</div>
          <div>签收日期：</div>
        </div>
      </div>
    </template>
  </a4-page>
</template>
<script>
  import a4Page from '../../../layout/a4Page.vue'

  export default {
    props: ['dataset'],
    data() {
      return {
        isPage: true
      }
    },
    components: {
      a4Page
    }
  }
</script>
<style scoped>

  .circle-1::before {
    content: "";
    @apply bg-white rounded-lg inline-block w-3 h-3 -ml-5 mr-2;
  }
  .border-dashed {
    border-color: #55B3DC;
  }
</style>
