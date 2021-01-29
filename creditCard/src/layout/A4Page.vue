<template>
  <div class="page">
    <slot></slot>
  </div>
</template>
<style scoped>
/* 設定media print時，page大小為A4，上下margin為0.5cm */
@page {
  size: A4 portrait;
  margin: 0.5cm 0;
}
/* TODO: 之後需要找到 tailwind 的 font-face 宣告方法，目前照官網的做法會 404 */
/* 字型皆需宣告，避免未宣告而使用系統預設字型，造成開發環境和 server 上的差異。 */
@font-face {
  font-family:'EUDC';
  src: url('../assets/fonts/EUDC.ttf');
  unicode-range: U+(E000-F8FF);
}
@font-face {
  font-family:'simsun';
  src: url('../assets/fonts/simsun.ttf');
}
@font-face {
  font-family:'Arial';
  src: url('../assets/fonts/Arial.ttf');
}
@font-face {
  font-family:'Helvetica';
  src: url('../assets/fonts/Helvetica.ttf');
}
</style>
