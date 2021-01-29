<template>
  <div>
    <!-- 现价表 -->
    <a4-page id="worth">
      <template slot="content">
        <div class="pt-4">
          <div class="inline-block font-bold text-center ml-16 mr-20">现金价值及减额交清<br>保额表</div>
          <div class="w-6/12 h-32 inline-block bgColor-1 fontSize3 rounded-2xl text-white pt-6 pl-6">
            <div class="font-bold">保险单号：{{dataset.Cont.LCCont_ContNo}}</div>
            <div>投保险种：{{dataset.Cont.RiskName}}</div>
            <div>基本保险金额：{{dataset.Cont.LCCont_Prem}}元</div>
            <div>交费期限：{{dataset.Cont.PayTerm}}</div>
          </div>
          <div style="justify-content:space-between;" class="flex px-2 mt-8">
            <table class="w-4/12" cellspacing="0">
              <thead>
                <tr style="height: 50px;" class="text-center leading-5 fontSize3">
                  <td style="background: rgba(85,179,220,.2);">保单<br>年度末</td>
                  <td style="background: rgba(85,179,220,.4);border-left:1px solid #FFF;border-right:1px solid #FFF;">现金价值<br>（元）</td>
                  <td style="background: rgba(85,179,220,.6);">减额交清<br>（元）</td>

                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in dataset.WORTH.ROW.slice(0,38)" :key="index">
                  <td>{{item.COL1}}</td>
                  <td>{{item.COL2}}</td>
                  <td>{{item.COL3}}</td>
                </tr>
                <tr v-for="(item1,index1) in 38-dataset.WORTH.ROW.slice(0,38).length" :key="index1+38">
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

              </tbody>
            </table>
            <table class="w-4/12" cellspacing="0" style="padding: 0 1.8px 0 1.8px;">
              <thead>
                <tr style="height: 50px;" class="text-center leading-5 fontSize3">
                  <td style="background: rgba(85,179,220,.2);border-left: 1px solid #FFF;">保单<br>年度末</td>
                  <td style="background: rgba(85,179,220,.4);border-left:1px solid #FFF;border-right:1px solid #FFF;">现金价值<br>（元）</td>
                  <td style="background: rgba(85,179,220,.6);">减额交清<br>（元）</td>

                </tr>
              </thead>
              <tbody class="line-1">
                <tr v-for="(item,index) in dataset.WORTH.ROW.slice(38,76)" :key="index+76">
                  <td>{{item.COL1}}</td>
                  <td>{{item.COL2}}</td>
                  <td>{{item.COL3}}</td>
                </tr>
                <tr v-for="(item1,index1) in 38-dataset.WORTH.ROW.slice(38,76).length" :key="index1+114">
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <table class="w-4/12" cellspacing="0">
              <thead>
                <tr style="height: 50px;" class="text-center leading-5 fontSize3">
                  <td style="background: rgba(85,179,220,.2);">保单<br>年度末</td>
                  <td style="background: rgba(85,179,220,.4);border-left: 1px solid #FFF;border-right: 1px solid #FFF;">现金价值<br>（元）</td>
                  <td style="background: rgba(85,179,220,.6);">减额交清<br>（元）</td>

                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in dataset.WORTH.ROW.slice(76,152)" :key="index+252">
                  <td>{{item.COL1}}</td>
                  <td>{{item.COL2}}</td>
                  <td>{{item.COL3}}</td>
                </tr>
                <tr v-for="(item1,index1) in 38-dataset.WORTH.ROW.slice(76,152).length" :key="index1+290">
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-xs mt-6">
            注：<br>
            1.本表所列现金价值为保单年度末现金价值。保单年度内的现金价值，可以向我们咨询。若犹豫期后退保，我们退还的现金价值为保单当时的现金价值。<br>
            2.本表仅适用于投保时合同确定的保险利益和保险金额，投保后所作的各项变更可能使本表不在适用。
          </div>

        </div>
      </template>
    </a4-page>

    <a4-page>
      <template slot="content">
        <div id="myChart" class="w-full mt-8" style="height: 500px;"></div>
      </template>
    </a4-page>
  </div>
</template>

<script>
  import a4Page from '../../../layout/a4Page.vue'
  export default {
    data() {
      return {
        //保单年度
        Policy_Year: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        //现金价值
        Cash_Value: [570.00, 1935.00, 3315.00, 5355.00, 8355.00, 11520.00, 14850.00, 18360.00, 22065.00, 25965.00,
          30075.00, 34440.00, 39030.00, 43830.00, 48855.00, 54150.00, 59715.00, 65565.00, 71775.00, 78375.00
        ],
        //减额交清
        Deduction: [1380.00, 4590.00, 7665.00, 12075.00, 18375.00, 24735.00, 31140.00, 37620.00, 44190.00, 50835.00,
          57600.00, 64515.00, 71595.00, 78795.00, 86145.00, 93750.00, 101610.00, 109800.00, 118455.00, 0.00
        ]
      }
    },
    props: ['dataset'],
    methods: {
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById("myChart"))
        myChart.setOption({
          //标题
          title: {
            text: '现金价值表及减额交清表'
          },
          
          //显示图例
          legend: {
            data: ['现金价值', '减额交清'],
            
          },
          //工具
          toolbox: { 
            show: true,
            feature: {
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          xAxis: [{ //x轴
            name: "年末",
            type: 'category',
            data: this.Policy_Year,
            boundaryGap: false,
            splitLine: {
              show: true,
            }
          }],
          yAxis: [{ //y轴
            name: "现金价值（元）",
            type: 'value',
            axisLine: { //y轴
              show: true
            },
            splitLine: { //网格线
              show: true,
            },
            axisTick: { //刻度线
              show: true
            }
          }],
          //获取data，画图
          series: [{ 
              name: '现金价值',
              type: 'line',
              data: this.Cash_Value,
            },
            {
              name: '减额交清',
              type: 'line',
              data: this.Deduction,
            }
          ],
          color:["green","blue"], //线条颜色
        })
      },
      afterRendered(){
        const self = this
        class MyHandler extends Paged.Handler{
          constructor(chunker,polisher,caller){
            super(chunker,polisher,caller);
          }
          afterRendered(pages){
            self.drawLine()
          }
        }
        Paged.registerHandlers(MyHandler)
      }
    
    },
   
    mounted() {
      try {
        this.afterRendered()
      } catch {
        this.drawLine()
      }    
    },
    components: {
      a4Page
    }
  }
</script>

<style scoped>
  div>table>thead>tr>td {
    @apply font-sans;
  }

  div>table>tbody>tr>td {
    font-size: 11px;
    @apply text-center font-sans h-4 p-0;
  }
  /* 鼠标悬停 */
  div>table>tbody>tr:hover {
    border: 1px solid orangered;
  }
  /* 表头背景 */
  div>table>tbody>tr:nth-child(even) {
    background: rgba(242, 242, 242, 1);
  }
  /* 表格边框 */
  div>table>tbody>tr>td:nth-child(even) {
    border-left: 1px solid #9FDAF4;
    border-right: 1px solid #9FDAF4;
  }

  div>table:first-child>tbody>tr>td:nth-child(1) {
    border-left: 1px solid #9FDAF4;
  }

  div>table:last-child>tbody>tr>td:nth-child(3) {
    border-right: 1px solid #9FDAF4;
  }

  .line-1 {
    border-left: 2.5px solid #9FDAF4;
    border-right: 2.5px solid #9FDAF4;
  }

  @media print {
    .print {
      display: block;
    }
  }
</style>
