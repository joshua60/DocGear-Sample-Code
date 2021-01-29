<template>
  <div class="page flex bg-white m-auto flex-col mb-10">
    <div class="content relative">
      <slot name="content"></slot>

    </div>


  </div>
</template>

<script>
  export default {

    name: "a4Page",
    props: {},

    data() {
      return {}
    }
  }
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .page {
    width: 21cm;
    height: 29.7cm;
    box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
    padding: 2cm 1.5cm;
  }
  
  @media print {

    #main{
      counter-reset: page 1;
    }
    .page{
      width: 18cm;
      box-shadow: none;
      page-break-before: avoid;
      page-break-after: always;
      @apply flex relative flex-col p-0 h-full;
    }
    
    @page:first{
      @bottom-center{
        content:"";
        
      }
    }
      @page {
          size: A4;
          margin: 1.5cm auto;
          @top-left{
            content:"8026888888888888";
            font-size:12px;
            color: #666;
          }
          /* 页码 */
         @bottom-center{
            content: "第"counter(page)"页 共"counter(pages)"页";
          }
      }
  }
</style>
