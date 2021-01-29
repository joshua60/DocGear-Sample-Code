<template>
  <!-- 目录 -->
  <a4Page>
    <template slot="content">
      <div class="flex">
        <div class="toc">
          <div class="pl-12 font-bold text-xl pt-16">保险合同目录</div>
          <div class="pl-12 text-sm w-11/12 mt-5">
            本保险合同由保险单、保险条款、投保单副本以及与合同有关的投保文件、合法有效的声明、批注、批单、附加险合同和其他书面协议构成
          </div>
        </div>
        <div style="height: 26.7cm;" class="bgColor-1 w-6/12 pt-64">
          <ul class="directory">
            <li>

              <a href="#main" class="toc-page">保险单</a>
            </li>
            <li>

              <a href="#worth" class="toc-page">现金价值表</a>
            </li>
            <li>

              <a href="#term" class="toc-page">保险条款</a>
              <!-- <div>
							<ul class="directory1">
								<li><div></div>百星人寿孝顺保恶性肿瘤疾病保险</li>
							</ul>
						</div> -->
            </li>
            <li>

              <a href="#paste" class="toc-page">批注、续期保险费发票粘贴页</a>
            </li>
            <li>

              <a href="#warmprompt" class="toc-page">温馨提示</a>
            </li>
            <li>

              <a href="#electronicpolicy" class="toc-page">电子投保单</a>

            </li>
            <li>

              <a href="#invoice" class="toc-page">保险费统一收据</a>
            </li>
            <li>

              <a href="#receipt" class="toc-page">保险合同签收回执</a>
            </li>
            <li>

              <a href="#customer" class="toc-page">客户服务指南</a>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </a4Page>
</template>

<script>
  import a4Page from '../../../layout/a4Page.vue'
  export default {
    data() {
      return {
        isPage: false
      }
    },
    components: {
      a4Page
    }

  }
</script>

<style>
  /* 目录标题样式 */
  .directory>li>a {
    @apply font-bold text-xl text-white pt-5 pl-5 inline-block;
  }

  .toc {
    @apply w-6/12;
    height: 25.7cm;
  }
  /* ‘链接’ 图片 */
 a::before {
    content: "";
    background: url('../../../assets/belstar/img/url.png') no-repeat;
    background-size: 100%;
    @apply inline-block mr-3 w-4 h-4;
  }

  @media print {
   /* ul.directory li a.toc-page::after {
      content:"target-counter(attr(href),page)";
    } */
  }
</style>
