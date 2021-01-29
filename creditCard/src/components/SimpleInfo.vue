<template>
  <div class="w-full text-title flex flex-col ">
    <section class="text-sm flex items-start justify-around w-full">
      <div>
        <address>
          郵編：{{ simpleInfo.postcode }}
          <br />
          地址：{{ simpleInfo.address }}
          <br />
        </address>
        <p>{{ simpleInfo.addressee }}</p>
        <img src="@/assets/img/address-code39.png" class="my-2" />
      </div>
      <img src="@/assets/img/address-barcode.png" class="h-16 my-3" />
    </section>
    <p class="w-full text-right text-xs pr-7">{{ simpleInfo.send }}</p>
  </div>
</template>
<script>
export default {
  props: ["simpleInfo"]
};
</script>
