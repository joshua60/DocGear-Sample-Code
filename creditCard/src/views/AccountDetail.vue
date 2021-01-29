<template>
  <a4-page>
    <div>
      <div v-if="accountDetail">
        <detail
          :detailsTitle="accountDetail.detailsTitle"
          :expensesList="accountDetail.expensesList"
        ></detail>
        <slogan :info="accountDetail.slogan" class="mt-1"></slogan>
        <terms :terms="accountDetail.term"></terms>
      </div>
    </div>
  </a4-page>
</template>
<script>
import A4Page from "@/layout/A4Page.vue";
import Detail from "@/components/Detail";
import Terms from "@/components/Terms";
import Slogan from "@/components/Slogan.vue";
export default {
  props: ["accountDetail"],
  components: {
    A4Page,
    Detail,
    Terms,
    Slogan
  },
  data() {
    return {};
  }
};
</script>
