<template>
  <div>
    <!-- 封皮 -->
    <Cover></Cover>
    
    <!-- 目录 -->
    <Toc></Toc>
    
    <!-- 主页 -->
    <Main :dataset="dataset" class="footer"></Main>
    
    <!-- 现价表 -->
    <Worth :dataset="dataset" class="footer"></Worth>
    
    <!-- 条款 -->
    <Term class="footer"></Term>
    
    <!-- 粘贴 -->
    <Paste class="footer"></Paste>
    
    <!-- 温馨提示 -->
    <WarmPrompt :dataset="dataset" class="footer"></WarmPrompt>
    
    <!-- 电子投保单 -->
    <ElectronicPolicy :dataset="dataset" class="footer"></ElectronicPolicy>
    
    <!-- 收据 -->
    <Invoice :dataset="dataset" class="footer"></Invoice>
    
    <!-- 回执 -->
    <Receipt :dataset="dataset" class="footer"></Receipt>
    
    <!-- 客户服务指南 -->
    <Instruction class="footer"></Instruction>
  </div>
</template>

<script>
  import Worth from './Worth.vue'
  import ElectronicPolicy from './ElectronicPolicy.vue'
  import Toc from './Toc.vue'
  import Receipt from './Receipt.vue'
  import Main from './Main.vue'
  import Invoice from './Invoice.vue'
  import WarmPrompt from './WarmPrompt.vue'
  import Term from './partials/term-1.vue'
  import Paste from './Paste.vue'
  import dataset from './data/belstar.json'
  import Cover from './Cover.vue'
  import a4Page from '../../../layout/a4Page.vue'
  import Instruction from './Instruction.vue'
  export default {
    data() {
      return {
        //数据获取
        dataset: dataset.DATASETS.DATASET
      }
    },
    components: {
      //组件注册
      Cover,
      Instruction,
      ElectronicPolicy,
      Worth,
      Toc,
      Receipt,
      Invoice,
      Main,
      WarmPrompt,
      Term,
      Paste,
      a4Page
    },
    methods: {

      // draw1(){
      // 	var c=document.getElementById("canvas1");
      // 	var ctx=c.getContext("2d");
      // 	ctx.beginPath();
      // 	ctx.moveTo(127,0);
      // 	ctx.lineTo(300,0);
      // 	ctx.lineTo(300,140);
      // 	ctx.lineTo(76,140);
      // 	ctx.lineTo(21,92);
      // 	ctx.fillStyle='#58B8E2'
      // 	ctx.fill();

      // },
      // draw2(){
      // 	var c = document.getElementById('canvas2')
      // 	var ctx = c.getContext('2d')
      // 	ctx.beginPath()
      // 	ctx.moveTo(0,0)
      // 	ctx.lineTo(243,0)
      // 	ctx.lineTo(122,106)
      // 	ctx.fillStyle='#58B8E2'
      // 	ctx.fill()
      // }
    },
    mounted() {},
  }
</script>

<style scoped>
  
</style>
