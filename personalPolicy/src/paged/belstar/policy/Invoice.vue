<template>
  <!-- 收据 -->
  <a4-page id="invoice">
    <template slot="content">
      <div class="bgColor-1 w-full text-center py-20 ">
        <img src="../../../assets/belstar/img/logo.png" style="width:175px;" class="inline-block">
      </div>
      <div>
        <div class="text-4xl font-bold mx-8 mt-16 mb-12">保险统一收据</div>
        <div class="flex m-auto mb-6 h-10 bgColor-1 w-11/12 items-center pl-24">
          <div class="w-4 ml-64 h-9"></div>
          <div class="w-48 h-9 ml-1"></div>
          <div class="w-3 h-9 ml-1"></div>
          <div class="w-5 h-9 ml-1"></div>
        </div>
        <div style="border-bottom: 3px solid #666;" class="w-11/12 m-auto mb-2 pb-1 text-xs">打印日期:{{dataset.Invoice.SysDate}}</div>
        <invoice-table :dataset="dataset"></invoice-table>
        <invoice-receipt :dataset="dataset"></invoice-receipt>
        <div class="text-xs m-auto w-11/12">
          注：1、本收据手写无效。<br>
          &emsp;&emsp;2、如果您需要发票，请凭此收据到我公司换领，换领发票后此收据作废。
        </div>
      </div>
    </template>
  </a4-page>
</template>

<script>
  import a4Page from '@/layout/a4Page.vue'
  import InvoiceTable from '@/components/belstar/policy/InvoiceTable.vue'
  import InvoiceReceipt from '@/components/belstar/policy/InvoiceReceipt.vue'
  export default {
    data() {
      return {
        isPage: true,
      }
    },
    components: {
      a4Page,
      //收据表格组件
      InvoiceTable,
      //收据回执样式组件
      InvoiceReceipt
    },


    props: {
      dataset:Array
    }
  }
</script>

<style scoped>
  .bgColor-1>div {
    @apply bg-white;
    transform: skewX(-45deg);
  }

</style>
