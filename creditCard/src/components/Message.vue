<template>
  <div class="border-2 rounded-md border-t-0 border-ruri">
    <h2 class="bg-ruri text-white py-2 px-2 font-normal ">最新活動訊息</h2>
    <section>
      <ul class="list-disc text-title pl-6 py-1 break-all">
        <li class=" break-words border-b-0 text-xs">
          {{ message }}
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  props: ["message"]
};
</script>
