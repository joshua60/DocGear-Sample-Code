<template>
  <a4-page class="break-inside break-after">
    <app-bar></app-bar>
    <p class="text-xs text-right  text-primary">
      百星客服電話：(08)8508-8408
    </p>
    <div v-if="info">
      <div class="flex items-center">
        <simple-info :simpleInfo="info.simpleInfo"></simple-info>
        <credits :credits="info.credits"></credits>
      </div>
      <div class="flex w-full">
        <section class="w-1/2">
          <account-info
            :infoTitles="info.accountInfo"
            class="my-1"
          ></account-info>
          <staging></staging>
          <points :points="info.points"></points>
          <message class="my-1" :message="info.message"></message>
          <img src="@/assets/img/enjoy.jpg" class="border border-black" />
        </section>
        <div class="w-1/2 pl-1">
          <img
            src="@/assets/img/delivery.jpg"
            class="my-1 border border-black"
          />
          <img
            src="@/assets/img/festival.jpg"
            class="my-1 border border-black"
          />
          <img
            src="@/assets/img/giveBack.jpg"
            class="my-1 border border-black"
          />
          <advertising-card
            :advertisingCard="info.advertisingCard"
          ></advertising-card>
        </div>
      </div>
    </div>
  </a4-page>
</template>
<script>
import A4Page from "@/layout/A4Page.vue";
import AppBar from "@/components/AppBar.vue";
import AccountInfo from "@/components/AccountInfo.vue";
import Credits from "@/components/Credits.vue";
import SimpleInfo from "@/components/SimpleInfo.vue";
import Points from "@/components/Points.vue";
import Message from "@/components/Message.vue";
import AdvertisingCard from "@//components/AdvertisingCard.vue";
import Staging from "@/components/Staging.vue";
export default {
  props: ["info"],
  components: {
    AppBar,
    A4Page,
    AccountInfo,
    Credits,
    SimpleInfo,
    Points,
    Message,
    AdvertisingCard,
    Staging
  }
};
</script>
