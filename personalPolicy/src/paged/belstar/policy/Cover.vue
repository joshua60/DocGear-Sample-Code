<template>
  <div>
    <a4-page>
      <template slot="content">
        <!--封皮-->
        <div class="cover w-12/12">
          <a href="https://www.belstar.com.cn/home/" target="_blank" class="url1"></a>
          <div class="w-60 absolute left-40 leading-26 bg-transparent top-60">
            <div class="text-center text-7xl font-bold">保险合同</div>
            <div class="text-center text-2xl leading-3 ">INSURANCE CONTRACT</div>
          </div>
          <div class="absolute bottom-4 font-bold text-center w-full"><a href="https://www.belstar.com.cn/home/" target="_blank">百星人寿保险股份有限公司</a></div>
        </div>
      </template>
    </a4-page>
    <a4-page>
      <template slot="content">
        <!--内页-->
        <div class="border-blue-300 border-11 border-solid rounded-2xl  m-auto px-6 pt-6 pb-5 mt-5">
          <div class=" text-xs">
            <div class="text-2xl text-center pb-3">公司简介</div>
            <p class="text-sm">北京百星电子系统有限公司（以下简称百星公司）成立于1995年，注册资金380万美元，是全外资的高科技企业。</p>
            <div class="text-blue-700 my-4  text-sm font-bold">定位</div>
            <div>目前致力于文件工程(Document Engineering)技术的探索与应用，并以网际网路技术(Web Service)提供多样性及高弹性的文件处理服务及管理。</div>
            <div class="my-4">文件工程(Document Engineering)如同资讯工程(Information Engineering)有密不可分的关系。
              但是，文件工程着重于讯息在文件上展现的技术。</div>
            <div class="content3">企业使用资讯工程的技术及方法来提升运作流程上的效能及品质；文件工程则是将文件：
              <ul>
                <li>零件化(Componentize)</li>
                <li>模版化(Templating)</li>
                <li>重复使用(Reusable)</li>
                <li>个性化(Personalize)</li>
                <li>版本管控(Versioning)</li>
                <li>同源多元输出(Single-source/Multi-channel Outputs)</li>
              </ul>
            </div>
            <div class="mt-4">以减少重工，确保品质及品牌形象的一致性。 经过多年在文件工程上的钻研，我们陆续推出下列文件处理服务平台：
              <ul>
                <li>动态文件模版设计管理平台(Dynamic Document Template Management System)</li>
                <li>同源多元输出(SSMO,Single-source/Multi-channel Outputs)</li>
                <li>按需生产平台(ODM, On-demand Manufacturing)</li>
                <li>因应文件工程多变的应用环境及需求，我们全面采取网际网路技术及框架。以微服务(Microservices)架构满&emsp;足多变的需求，以OpenAPI实现多样服务的无缝接轨。</li>
              </ul>
            </div>
            <div class="text-blue-700 my-4 text-sm font-bold">服务</div>
            <div>除了对文件结构性解析及研究外，多年来亦运用自行开发“云”服务平台(Cloud Platform)，为客户提供专业的文件外包服务解决方案。 </div>
            <div class="my-4">典型的例子，是保险保单的处理：从与保险公司专线连线、实时数据传输，数据处理，条件式条款的组合，个性化保单合同的渲染生成，批次处理、分区生产，物流追踪等各个阶段实现全面优化管理与监控。</div>
            <div>截至目前，已在全国主要省会城市建立自有文件处理中心21个，驻点服务中心16个，与客户合作建立37个外包服务站点。</div>
            <div class="text-blue-700 my-4 text-sm font-bold">客户</div>
            <div class="text-xs">目标客户多以文件为核心的产业，譬如：
              <div class="py-1">保险业</div>
              <div>银行</div>
              <div class="py-1">证券</div>
              <div>制造业</div>
              <div class="py-1">电信</div>
              <div>邮政</div>
            </div>
          </div>
        </div>
      </template>
    </a4-page>

  </div>
</template>

<script>
  import a4Page from '../../../layout/a4Page.vue'
  export default {
    components: {
      a4Page
    }
  }
</script>

<style scoped>
  /* 背景图片 */
  .cover {
    background: url('../../../assets/belstar/img/fengpi.png') no-repeat;
    background-size: 100%;
    height: 26.7cm;
  }
  
  a:visited{
    color:#000;
  }

  .text-blue-700::before{
    content:"";
    @apply inline-block rounded-lg w-2 h-2 bg-blue-700 -ml-3 mr-1;
  }
  ul>li{
    @apply leading-5;
  }
  /* 列表样式 · */
  ul>li::before{
    content:"";
    @apply rounded-lg inline-block bg-black w-1 h-1 -ml-2 mr-1 align-middle;
  }
</style>
