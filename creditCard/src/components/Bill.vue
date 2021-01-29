<template>
  <div
    class="flex  items-center border-t  border-dashed break-inside  py-1 break-inside border-black"
  >
    <div
      class="flex text-xs flex-col border-r  border-dashed mx-1 border-black"
    >
      <!-- barcode -->
      <div class="flex items-center text-xs  justify-around">
        <span>
          <p class=" break-words ml-2">
            便利商店使用(繳交上限為2萬元)
          </p>
          <img
            width="100"
            v-for="(url, index) in bill.paymentBarcode"
            :key="index"
            :src="url"
            class="mt-1 h-8"
          />
        </span>
        <div class="flex flex-col justify-end">
          <span v-for="(paid, index) in bill.paidBarcode" :key="index">
            <input type="checkbox" />
            <label>
              {{ paid.label }}
            </label>
            <img :src="paid.imgUrl" width="100" class="h-8" />
          </span>
        </div>
      </div>
      <!--first-->
      <div class="flex">
        <p class="vertical">第一聯：全行代理收款傳票</p>
        <table class="table-fixed w-full break-words">
          <tr>
            <td colspan="3">戶名：{{ bill.user.account }}</td>
            <td colspan="3">
              付款月份：{{ bill.user.payDate.year }} 年
              {{ bill.user.payDate.month }} 月
            </td>
          </tr>
          <tr>
            <td>全行代理<br />收款專戶</td>
            <td colspan="2">百星銀行（代收類別:400212）</td>
            <td colspan="2" class="text-xs">
              自動繳款機繳款：輸入銀行代碼"021"及信用卡號網路繳費準備好您的她行活存帳戶進入轉帳繳費中心
            </td>
            <td rowspan="3" class="mx-auto text-center">
              收訖戳記
              <div class="rounded-full h-16 w-16 border-2 mx-auto "></div>
            </td>
          </tr>
          <tr>
            <td>金額大寫</td>
            <td colspan="4">
              <ul class="text-dispersion">
                <span>新臺幣：</span>
                <span v-for="(unit, index) in bill.user.money" :key="index">
                  <span class="font-bold"> {{ unit.value }}</span>
                  <span> {{ unit.unit }}</span>
                </span>
                <span class="font-bold">整</span>
              </ul>
            </td>
          </tr>
          <tr>
            <td>認證欄</td>
            <td colspan="4">
              <img
                src="https://www.cognex.com/api/Sitecore/Barcode/Get?data=BEGIN%3AVCARD%0AN%3ASchwarzenegger%3BArnold%0AORG%3ACognex%0ATEL%3A%2B1%20855-426-4639%0AEMAIL%3Acontactus%40cognex.com%0AURL%3Ahttps%3A%2F%2Fwww.cognex.com%0AADR%3A%3B%3B1%20Vision%20Drive%3BNatick%3B%3B01760-2059%3BUnited%20States%0AEND%3AVCARD&code=Z_QR_CODE&width=300&imageType=JPG&foreColor=%23000000&backColor=%23FFFFFF&rotation=RotateNoneFlipNone"
                width="60"
                class="float-right pt-2"
              />
              <p class="clear-right">
                手機掃描右側QRcode，以您的他行活存線上直接繳交卡費
              </p>
            </td>
          </tr>
        </table>

        <div rowspan="5" class=" ml-1 w-8 justify-between flex flex-col ">
          <p v-for="(i, index) in items" :key="index">{{ i }}</p>
        </div>
      </div>
      <div class="flex justify-around">
        <img
          :src="collection"
          width="100"
          class="mt-2 h-8"
          v-for="(collection, index) in bill.collectionBarcode"
          :key="index"
        />
      </div>
    </div>
    <!-- 第二聯table -->
    <div class="flex text-xs">
      <p class="vertical">第二聯：本聯由繳款人收執</p>
      <table class="break-words table-fixed text-center">
        <tr>
          <td colspan="7">戶名</td>
        </tr>
        <tr>
          <td colspan="7">{{ bill.user.account }}</td>
        </tr>
        <tr>
          <td v-for="(unit, index) in bill.user.money" :key="index">
            <p
              class="border-b-2 items-center justify-center flex h-6 border-black"
            >
              {{ unit.unit }}
            </p>
            <p class="h-4 flex items-center justify-center font-light">
              {{ unit.value }}
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7">
            <p class="border-b-2 border-black">代收編號</p>
            <p>{{ bill.user.serialNumber }}</p>
          </td>
        </tr>
        <tr>
          <td colspan="3">姓名</td>
          <td colspan="4">{{ bill.user.name }}</td>
        </tr>
        <tr>
          <td colspan="7">繳款截止日</td>
        </tr>
        <tr>
          <td colspan="7">{{ bill.user.deadline }}</td>
        </tr>
        <tr>
          <td colspan="7">本期應付總金額</td>
        </tr>
        <tr>
          <td colspan="7">{{ bill.user.highAmount }}</td>
        </tr>
        <tr>
          <td colspan="7">最低應繳總金額</td>
        </tr>
        <tr>
          <td colspan="7">{{ bill.user.lowAmount }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ["bill"],
  data() {
    return {
      items: ["主管", "會計", "覆核", "記帳", "製票"]
    };
  }
};
</script>
