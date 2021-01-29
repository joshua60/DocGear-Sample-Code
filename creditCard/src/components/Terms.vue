<template>
  <section class="py-1">
    <h3
      class="bg-ruri text-white text-base  flex items-center justify-start font-normal  px-2 "
    >
      卡友權益
    </h3>
    <p class="text-title font-bold text-xs">信用卡帳單給消費者注意事項</p>
    <ul class="list-disc text-title pl-4">
      <li
        class="text-xs break-words border-b-0"
        v-for="(term, index) in terms"
        :key="index"
      >
        {{ term }}
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: ["terms"]
};
</script>
