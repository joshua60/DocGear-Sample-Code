<template>
  <section class="text-xs  border border-black pb-3">
    <img src="@/assets/img/tourism.jpg" class="mb-2" />
    <h4 class="text-sm font-bold text-ruri ">{{ advertisingCard.title }}</h4>
    <p class="px-2 text-font">
      {{ advertisingCard.content }}
    </p>
  </section>
</template>
<script>
export default {
  props: ["advertisingCard"]
};
</script>
