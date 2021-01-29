<template>
  <!-- 温馨提示 -->
  <a4-page id="warmprompt">
    <template slot="content">
      <div class="text-gray-800 relative pt-6 mt-10 pr-5">
        <div class="font-bold text-3xl bg-white px-8 absolute -mt-5 ml-24 z-10">温馨提示</div>
        <div class="absolute bgColor-1 h-2 w-8/12"></div>
        <div class="absolute bgColor-1 h-2 w-7/12 bottom-0 -mb-24 right-0"></div>
        <div class="absolute bgColor-1 h-96 w-2"></div>
        <div class="absolute bgColor-1 w-2 h-80 right-0 bottom-0 -mb-24"></div>
        <div class="mt-16 ml-12 text-xs text-justify mr-5">
          <p class="font-simsun">尊敬的旺福先生:</p>
          <p class="mt-6">感谢您选择百星人寿为您提供服务!</p>
          <p>您的权利和义务已在本合同中载明，请您仔细阅读。为了维护您的权益，我们还特别提醒您注意以下事项:</p>
          <p class="circle mt-6">一、请您认真核对保险合同的内容。若核对无误，请您签收保单，并亲笔签署回执（包含签署日期）。若您收到的为电子保单，保单送达即视为您已签收，请您确认合同内容准确无误，如有疑问，请及时与我司联系。</p>
          <p class="circle mt-6">二、请您认真阅读保险条款，并重点关注保险责任和除外责任，了解所购买保险产品的保障范围<span class="font-bold">以及在约定的保险责任发生时给付金额的计算方法。</span></p>
          <p class="circle mt-6">三、对于保险期间在一年以上的合同都设有10天的犹豫期(商业银行代理销售的保险产品保险期间超过一年的，犹豫期为15天），犹豫期内退保和犹豫期后退保的给付金额不同，具体规定请您阅读保险合同“犹豫期”、“合同解除”和<span
              class="font-bold">“现价价值表”</span>部分。</p>
          <p class="circle mt-6">四、请您全面理解您所购买的产品，确定您选择了合适的保险金额、保险期间和交费金额、交费期限。对于需要分期缴纳保险费的，如果您无法持续交纳保险费，有可能导致合同效力中止或解除。</p>
          <p class="circle mt-6">五、对于您投保的万能保险，了解各项费用扣除的具体情况、保单账户价值的计算法。对于账户价值的增长，我们会保证最低的结算利率，实际结算利率高于最低保证利率的部分需要视投资收益情况而定，这部分是我们不保证的。</p>
          <p class="mt-6">如您有任何疑问，请拨打我们的全国统一客户服务和客户维权电话:400-610-5058或联系您的保单服务人员咨询。</p>

        </div>
        <div class="text-xs mt-32 mr-12 text-right">百星人寿保险股份有限公司</div>
      </div>
    </template>
  </a4-page>
</template>

<script>
  import a4Page from '../../../layout/a4Page.vue'
  export default {
    data() {
      return {
        isPage: true
      }
    },
    props: {
      dataset:Array
    },
    components: {
      a4Page
    }
  }
</script>

<style scoped>
  p.circle::before{
    content:"";
    background: #55B3DC; 
    @apply rounded-lg inline-block -ml-6 mr-3 h-3 w-3;
  } 

  @media print {}
</style>
