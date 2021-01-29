<template>
  <table class="table-fixed w-full">
    <caption class="table-caption">
      信用額度
    </caption>
    <tr v-for="(item, index) in credits" :key="index">
      <td class="table-td table-display">
        <span>{{ item.title }}</span>
        <span>{{ item.content }}</span>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: ["credits"]
};
</script>
