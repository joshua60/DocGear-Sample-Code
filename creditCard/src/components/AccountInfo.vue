<template>
  <table class=" w-full">
    <caption class="table-caption">
      帳務資訊
    </caption>
    <tr v-for="(item, index) in infoTitles" :key="index">
      <td class="table-td table-display">
        <span :class="item.amount ? 'font-bold' : 'none'">{{
          item.title
        }}</span>
        <span :class="item.amount ? 'font-bold' : 'none'">{{
          item.content
        }}</span>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: ["infoTitles"]
};
</script>
<style scoped></style>
