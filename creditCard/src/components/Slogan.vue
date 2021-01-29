<template>
  <section class="flex  items-center justify-center  break-inside w-full">
    <p class="break-words ml-2 text-xs text-font">{{ info }}</p>
    <p
      class="font-bold text-sm border-2 border-ruri px-10  flex-shrink-0 text-ruri "
    >
      謹慎理財<br />信用至上
    </p>
  </section>
</template>
<script>
export default {
  props: ["info"]
};
</script>
