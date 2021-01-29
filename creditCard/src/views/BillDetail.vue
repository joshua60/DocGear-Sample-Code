<template>
  <a4-page>
    <div>
      <bill v-if="billData" :bill="billData"></bill>
    </div>
  </a4-page>
</template>
<script>
import A4Page from "@/layout/A4Page.vue";
import Bill from "@/components/Bill.vue";
export default {
  props: ["billData"],
  components: {
    A4Page,
    Bill
  }
};
</script>
