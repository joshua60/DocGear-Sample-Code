<template>
  <div class="h-screen">
    <info :info="infoData"></info>
    <account-detail :accountDetail="accountDetailData"></account-detail>
    <bill-detail :billData="billData"></bill-detail>
  </div>
</template>

<script>
import Info from "@/views/Info.vue";
import AccountDetail from "@/views/AccountDetail.vue";
import BillDetail from "@/views/BillDetail.vue";
import fakeData from "@/assets/data/data.json";
export default {
  components: {
    Info,
    AccountDetail,
    BillDetail
  },
  data() {
    return {
      infoData: fakeData.info || null,
      accountDetailData: fakeData.detail || null,
      billData: fakeData.bill || null
    };
  },
  async mounted() {
    try {
      this.afterProcess();
    } catch {
      console.log("Need load extension plugin");
    } finally {
      if (window.isRenderable === false) {
        window.isRenderable = true;
      }
    }
  },
  methods: {
    afterProcess() {
      class MyHandler extends Paged.Handler {
        constructor(chunker, polisher, caller) {
          super(chunker, polisher, caller);
        }
        async afterPreview() {
          window.isRenderable = true;
        }
      }
      Paged.registerHandlers(MyHandler);
    }
  }
};
</script>
