<template>
  <div>
    <a4-page id="electronicpolicy">
      <!-- 电子投保单-1 -->
      <template slot="content">
        <div class="title3 text-white text-center bgColor-1 w-full font-bold">电子投保单</div>
        <div class="bgColor-1 w-40 h-8 leading-8 text-white text-center mt-3 ml-3 font-bold">投保须知</div>
        <ul class="w-11/12 text-justify text-xs mt-5 ml-8">
          <div class="font-bold">感谢您选择百星人寿保险股份有限公司为您服务，请您在签收保单前仔细阅读以下提示：</div>
          <li>1.为了使您详知所投保的保险内容并维护您的合法权益，请在签字之前仔细 阅读保险条款，并确认已了解保险条款的各项内容(注意保险责任、责任免除、犹豫期、退保等关键信息)后方可签字。
          </li>
          <li>2.投保书是投保人向本公司申请投保的重要 文件，投保人、被保险人或其法定监护人应在投保书签名栏上亲笔签章以示确认所填写的内容，本公司对投保书及告知内容承担保密义务。
          </li>
          <li>3.投保人(被保险人)在 投保时应如实告知投保书中的各项内容，不得故意隐瞒或不实告知，否则本公司有权依据法律规定及本保险合同约定解除保险合同，所有告知事项均以书面告知为准，
            口头告知无效。同时您的个人信息(地址、电话等)将作为计算保险费、核保、寄送保险合同、电话回访等服务的重要依据，请您提供真实、完整的信息，否则将不利 于保护您的合法权益。
          </li>
          <li>4.如果投保人选择分期交纳保险费，请投保人根据自身的财务状况，选择合适的交费期限和交费金额，无法持续交纳保险费可能导致保险合同 效力中止或合同解除。本公司将于续期保费应缴日前向投保人发出交费提示。
          </li>
          <li>5.为响应国家低碳环保的号召，公司为您提供的通知及函件将采用电子单证形式，您可
            以到公司官网或到您投保时预留的电子邮箱中查询阅读。如您需要纸质单证，可到公司客服中心或拨打全国统一客户服务和客户维权电话95510申请。
          </li>
          <li>6.投保人应对被 保险人有保险利益;如为未成年人投保以死亡为给付责任的保险，投保人须为未成年人的父母，且身故保险金总和不能超过保险监督管理机构的规定额度。</li>
        </ul>

        <div class="bgColor-1 w-40 h-8 leading-8 text-white text-center mt-8 ml-3 font-bold">投保资料</div>

        <ElectronicPolicyCard :dataset='dataset'></ElectronicPolicyCard>
        <ElectronicPolicyTable :dataset="dataset"></ElectronicPolicyTable>
      </template>
    </a4-page>
    
    <!-- 电子投保单-2 -->
    <a4-page>
      <template slot="content">
        <div class="mt-3"></div>
        <ElectronicPolicyTable></ElectronicPolicyTable>
        <ElectronicPolicyTable></ElectronicPolicyTable>
        <div class="bgColor-1 w-40 h-8 leading-8 text-white text-center mt-6 font-bold ml-3">保险计划</div>
        <div class="bg-blue-500 w-12 text-center text-xs m-1 text-white rounded-md float-right -mt-4 mr-16">客户联</div>
        <ElectronicPolicyPlan :dataset='dataset'></ElectronicPolicyPlan>

        <div class="bgColor-1 w-40 h-8 leading-8 text-white text-center mt-6 font-bold ml-3">财务及其它声明信息</div>
        <table class="border-1 border-solid border-blue-300 text-xs w-11/12  mt-4 leading-5 ml-3" cellspacing="0">
          <tr style="letter-spacing: 1px;border-bottom: 1.5px solid #55B3DC;">
            <td class="font-bold">填写或回答下列问题，并选择选择项后的“<span class="circle"></span>”。选“是”者请在“告知信息及备注栏”中注明问题号码并详细说明:</td>
            <td colspan="2" width="10%" style="padding-left: 6px;">被保险人<br>是<span class="w-3/12 inline-block"></span>否</td>

            <td colspan="2" width="9%" style="padding-left: 4px;border-left:1.5px solid #55B3DC;">投保人<br>是<span class="w-3/12 inline-block"></span>否</td>
          </tr>
          <tr>
            <td>1.投保人每年收入约<span class="w-1/12 inline-block"></span>万元，主要来源:工薪</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>2.被保险人每年收入约<span class="w-1/12 inline-block"></span>万元，主要来源: 工薪</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>3.您目前是否已有或正在申请除本公司以外的人身保险?若是，被保险人累计已承保且有效的和正在申请保单保额<span class="w-1/12 inline-block"></span>万;
              投保人累计已承保且有效的和正在申请保单保额<span class="w-1/12 inline-block"></span>万</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>4.您在过去投保人身保险时，或在申请保全复效时，曾否被拒保、延期、加费或对条款做特别约定，或申请过理赔?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>5.您曾否参与赛车、潜水、跳伞、或其他有危险性体育运动或有以上运动嗜好?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>6.您是否持有摩托车驾照? <br>
              有无交通事故记录?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>7.您是否有私家车辆?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>8.您在过去三年内曾否在其他国家居住或是否在未来一年内有此计划?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>9.有无其它声明:</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
        </table>
      </template>
    </a4-page>
    
    <!-- 电子投保单-3 -->
    <a4-page>
      <template slot="content">
        <div class="bgColor-1 w-40 h-8 leading-8 inline-block text-white text-center mt-6 font-bold ml-3">健康信息告知</div>
        <div class="font-bold inline-block text-xs">（如不涉及投保人保费豁免责任，则投保人健康信息告知栏无须填写）</div>
        <table cellspacing="0" class="ml-3 border-1 border-solid border-blue-300 text-xs w-11/12  mt-5 leading-5">
          <tr>
            <td><b>填写或回答下列问题，并选择选择项后的“<span class="circle"></span>”。选“是”者请在“告知信息及备注栏”中注明问题号码并详细说明:</b></td>
            <td colspan="2" width="10%" style="padding-left: 6px;">被保险人<br>是<span class="w-3/12 inline-block"></span>否</td>

            <td colspan="2" width="9%" style="padding-left: 4px;border-left:1.5px solid #55B3DC;">投保人<br>是<span class="w-3/12 inline-block"></span>否</td>
          </tr>
          <tr>
            <td>1. (被保险人)身高 <span class="w-8 inline-block"></span>(cm)&emsp;体重<span class="w-1/12 inline-block"></span>(kg);
              <br>&emsp;(投保人)身高 <span class="w-8 inline-block"></span>(cm)&emsp;体重 <span class="w-1/12 inline-block"></span>(kg)。</td>
            <td class="border-r-0"><span class="circle"></span></td>
            <td class="border-0"><span class="circle"></span></td>
            <td class="border-r-0"><span class="circle"></span></td>
            <td class="border-0"><span class="circle"></span></td>
          </tr>
          <tr>
            <td>2. 您曾否使用任何成瘾药物、麻醉剂或接受戒毒治疗?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>4. 您是否习惯性饮酒?若“是”， (被保险人)已饮酒<span class="w-6 inline-block"></span>年，饮酒量:白酒<span class="w-5 inline-block"></span>两/日，啤酒<span
                class="w-5 inline-block"></span>瓶/日
              <div class="ml-40">(投保人) 已饮酒<span class="w-6 inline-block"></span>年，饮酒量:白酒<span class="w-6 inline-block"></span>两/日，啤酒<span
                  class="w-6 inline-block"></span>瓶/日</div>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>5. 您是否曾经吸烟、饮酒?若“是”曾经吸烟、饮酒，何时因何种原因停止吸烟、饮酒?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>6. 您有无职业病，如尘肺、矽肺、石棉肺、各种慢性中毒等;</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>7. 您或您的配偶是否患有艾滋病或为艾滋病毒携带者?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>8. 您在过去6个月内是否持续超过一星期有下列病症:疲倦、体重下降、食欲不振、盗汗、腹泻、淋巴结肿大或不寻常之皮肤溃烂?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>9. 您是否接受过手术治疗?五年内是否接受过门诊治疗或住院治疗?医生是否建议服药、检查?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>10. 您五年内是否做过血常规、肝功能、心电图、超声波、脑电图、肌电图、内窥镜、心血管造影、X光、CT、活组织检查、血液检验或其他特殊检查并发现异 常?若“是”，则请告知检查原因及检查结果;</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>11. 您是否曾患有或被告知患有下列症状或疾病?若“是”，请注明疾病名称、症状、医院名称、治疗时间和结果:</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(1) 胸部疼痛、心脏杂音、脉搏不正常、高血压(指收缩压≥140mmhg，舒张压≥90mmhg，或其中一项超过以上值)、动脉粥样硬化、冠心病、心肌梗塞、心肌
                肥厚、先天性心脏血管病、主动脉瘤、心脏瓣膜病、风湿性心脏病、风湿病、肺心病、心肌炎、心内膜炎、心律失常、传导阻滞、心包炎以及其他血管疾病;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(2) 脑中风(脑出血、脑梗塞)、脑瘤、脑血管瘤、脑动静脉畸形、短暂性脑缺血、脑炎、脑膜炎以及其他脑部疾病;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(3) 精神病、抑郁症、神经官能性疾病、多动症、癫痫、肢体麻木、脊髓炎、多发性硬化、肌肉萎缩症、重症肌无力、帕金森氏病、肝豆状核变性以及其他神 经精神疾病;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(4) 久咳、咯血、肺炎、支气管炎、肺气肿、支气管扩张、尘矽肺、肺大泡、肺脓疡、肺栓塞、肺结核、哮喘、胸膜炎、气胸以及其他呼吸系统疾病;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(5)
                肝炎、肝炎病毒携带、脂肪肝、肝内结石、胆结石、胆囊炎、肝脓疡、黄疸、肝硬化、肝囊肿、肝功异常、胰腺疾病、慢性胃炎、肠炎、消化道溃疡或出血、穿孔、溃疡性结肠炎、疝、肠梗阻、痔疮等其他肛肠疾病以及其他消化系统疾病;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(6) 肾炎、肾结石、肾小球疾病、肾病综合症、血尿、蛋白尿、肾积水、肾功能衰竭、尿毒症、肾囊肿、肾结核、泌尿系感染、输尿管结石以及其他泌尿系统 疾病;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(7) 癌症、肿瘤、腺瘤、息肉、囊肿、血管瘤以及其他包块或肿物;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(8) 再生障碍性贫血、淋巴瘤、白血病、血友病、紫癜症、贫血、淋巴腺疾病、脾脏疾病以及其他血液和淋巴系统疾病;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(9) 糖尿病、高血脂症、痛风、甲状腺疾病、甲状旁腺疾病、肾上腺疾病、肢端肥大症、脑垂体异常以及其他内分泌、代谢疾病;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(10) 类风湿性关节炎、风湿病、强直性脊柱炎、椎管狭窄、脊柱裂、股骨头坏死、骨关节炎、肌营养不良症、不明原因的肌肉萎缩、干燥综合症、红斑狼疮、
                结缔组织病、白赛氏病、免疫性疾病、自体免疫性疾病、免疫缺陷病(艾滋病或艾滋病病毒携带);</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(11) 白内障、青光眼、视神经或视网膜病变、中耳炎、鼻中隔偏曲、鼻息肉、扁桃体炎以及其他耳鼻喉、口腔科疾病;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>
              <p>(12) 多囊肝、多囊肾以及其他先天性疾病、遗传性疾病、脑外伤后遗症、内脏损伤、中毒;</p>
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
        </table>

      </template>
    </a4-page>
    
    <!-- 电子投保单-4 -->
    <a4-page>
      <template slot="content">
        <table cellspacing="0" class="border-1 border-solid border-blue-300 w-11/12  text-xs mt-10 leading-5 ml-3">
          <tr>
            <td>
              <p>(13) 皮肤病、性传播疾病;</p>
            </td>
            <td width="5%"><span class="circle"></span></td>
            <td width="5%"><span class="circle"></span></td>
            <td width="4.5%"><span class="circle"></span></td>
            <td width="4.5%"><span class="circle"></span></td>
          </tr>
          <tr>
            <td>12. 身体残疾情况:您有无智能障碍，是否失明、聋哑、跛行;有无脊柱、胸廓、四肢、头面部、口腔、手指、足趾等畸形、缺损或者功能障碍;有无语言、咀
              嚼、吞咽、视力、听力、视野、嗅觉、中枢神经系统功能障碍;有无脏器、器官、皮肤结构缺失?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>13. 您的父母、子女、兄弟姐妹是否曾患有肾病、心脏病、高血压、多发性硬化、肝硬化、糖尿病、精神病、结核病、白血病、瘫痪、肌肉萎缩症、切除任何囊
              肿或增生物、癌症或曾被发现为任何肝炎，或肝炎病毒携带者?是否有早于60岁以前去世者?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td><b>女性使用 :</b><br>
              14. 是否正在怀孕?若“是”(投保人)已怀孕_______周?(被保险人)已怀孕_______周?
            </td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>15. 您曾否患任何乳房或产科病症或妇科病症?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>16. 您曾否被建议做宫颈涂片、乳房检查、乳房X光检查或乳房活组织检查?若“是”请提供检查结果;</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td><b>男性使用: </b><br>17. 您曾否患前列腺炎、前列腺肥大、睾丸或附睾肿大、隐睾症、精索静脉曲张以及睾丸、阴茎、输精管缺失或者缺损等男科疾病?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td><b>两周岁以下少儿(含两周岁)补充告知栏:</b><br>18.
              出生时身高&emsp;&emsp;&emsp;&emsp;&emsp;厘米，体重&emsp;&emsp;&emsp;&emsp;&emsp;公斤;</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>19. 是否早产、难产、过期产;有无先天性疾病、遗传性疾病或畸形;有无体重不增或增长缓慢;有无肺炎、抽搐、腹泻、新生儿黄疸等疾病?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>20. 您是否曾患有或被告知患有下列症状或疾病?若“是”，请注明疾病名称、症状、医院名称、治疗时间和结果:</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>21. 有无正常按时接种?若“无”请说明原因;</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>
          <tr>
            <td>22. 您过去是否曾患目前患有第11-29项未例举的症候或疾病?</td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
            <td><span class="circle"></span></td>
          </tr>

        </table>
        <div class="bgColor-1 w-40 h-8 leading-8 text-white text-center mt-8 font-bold ml-3">告知信息及备注栏</div>
        <table cellspacing="0" class="w-11/12 text-center my-6 ml-3">
          <tr>
            <td style="padding-left: 0;">
              <table width="100%" class="font-sans text-xs" cellspacing="0">
                <thead>
                  <tr>
                    <td class="bg-blue-200 h-6">序号</td>
                    <td class="bor-left bor-right bg-blue-300">告知对象</td>
                    <td class="bor-right bg-blue-400">告知内容</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in dataset.otherCustomerimpart.ROW.slice(0,4)" :key="index">
                    <td>{{index+1}}</td>
                    <td class="bor-left bor-right">{{item.COL1}}</td>
                    <td class="bor-right">{{item.COL2}}</td>
                  </tr>
                  <tr v-if="4-dataset.otherCustomerimpart.ROW.slice(0,4).length>0" v-for="(item,index) in 4-dataset.otherCustomerimpart.ROW.slice(0,4).length" :key="index">
                    <td>{{dataset.otherCustomerimpart.ROW.slice(0,4).length+1+index}}</td>
                    <td class="bor-left bor-right"></td>
                    <td class="bor-right"></td>
                  </tr>

                </tbody>
              </table>
            </td>
            <td class="pl-0">
              <table width="100%" class="font-sans text-xs" cellspacing="0">
                <thead>
                  <tr>
                    <td class="bg-blue-200 h-6">序号</td>
                    <td class="bor-left bor-right bg-blue-300">告知对象</td>
                    <td class="bor-right bg-blue-400">告知内容</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in dataset.otherCustomerimpart.ROW.slice(4,8)" :key="index">
                    <td class="bor-left">{{index+5}}</td>
                    <td class="bor-left bor-right">{{item.COL1}}</td>
                    <td>{{item.COL2}}</td>
                  </tr>
                  <tr v-if="4-dataset.otherCustomerimpart.ROW.slice(4,8).length>0" v-for="(item,index) in 4-dataset.otherCustomerimpart.ROW.slice(4,8).length" :key="index">
                    <td class="bor-left">{{dataset.otherCustomerimpart.ROW.slice(4,8).length+5+index}}</td>
                    <td class="bor-left bor-right"></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
        <div class="bgColor-1 w-40 h-8 leading-8 text-white text-center mt-8 font-bold ml-3">临时保障声明</div>
        <ul class="text-xs w-11/12 w-11/12 text-justify leading-5 font-sans ml-8">
          <div>鉴于投保人已向百星人寿保险股份有限公司(以下简称“本公司”)申请投保人身保险并正在等待本公司的批准，本公司提供临时保障如下: </div>
          <li>1. 临时保障的生效时间及条件:自本公司收到投保人提交的完整如实填写的投保信息并交纳暂收保险费或转账授权次日零时起开始。如授权账户错误、账户余额不足或账户 挂失、冻结、销户，则以上临时保障自始不成立。
          </li>
          <li>2. 临时保障的保险责任及保险金额限制:临时保障期间，本公司仅承担投保人所申请投保险种的意外身故责任，并向投保信息中所载的身故保险金受益人支付该单所列明的
            身故保险金，但最高给付金额不超过人民币贰拾万元整。如果同一被保险人有效临时保障多于一份且总保额超过人民币贰拾万元，则本公司给付的保险金额将按照临时保障保
            额占各投保书累计保额的比例在各临时保险单间分配，且总计给付保险金额不超过人民币贰拾万元整。 未成年人给付身故保险金总和不超过保险监督管理机构规定的限额。
          </li>
          <li>3. 临时保障的终止:自本公司收到投保人的暂收保险费或转账授权次日零时起三十日终止;或本公司同意承保之日终止;或投保人提出撤销投保申请之日终止;或本公司做
            出最终核保结论延期、谢绝投保之日终止。满足以上任一条件此临时保障均终止。
          </li>
          <li>4. 临时保障责任免除:同条款中约定的责任免除事项。
          </li>
        </ul>
      </template>
    </a4-page>
    
    <!-- 电子投保单-5 -->
    <a4-page>
      <template slot="content">
        <div class="bgColor-1 h-8 leading-8 font-bold w-3/5 text-white text-center mt-10 px-1 ml-3">投保人/被保险人/法定监护人声明授权书及合同签收回执</div>
        <ul class="text-xs mt-5 w-11/12 text-justify leading-5 font-sans ml-8">
          <li>1. 本人已认真阅读 投保须知、投保提示书、产品条款及产品说明书，确认已了解条款所列的各项内容 (尤其是保险责任条款、责任免除条款、合同解除条款)且同意遵守条款约定。
          </li>
          <li>2. 本人已经确认投保单填写的各项内容，对受益人的指定均认可。本人在投保单中的健康告知内容均准确无误，如不属实贵公司有权依据法律规定和条款约定解除本保险合同。
          </li>
          <li>3. 本人确认所提供的付款账户是投保人本人的账户并同意转账授权内容。
          </li>
          <li>4. 本人已知晓:本保险合同自贵公司同意承保、收取保险费并签发保险单后开始生效，生效日载于保险单上，贵公司自生效日零时起开始承担合同约定的保险责任。
          </li>
          <li>5. 本人同意，本次投保信息及电子记录凭证等数据电文是本保险合同的组成部分，具备完全证据效力。 </li>
          <li>6. 本人授权贵公司可以从任何单位、组织和个人就有关保险事宜查询、索取与本人有关的资料和证明，作为审核本投保申请及评估相关理赔申请的依据，贵公司对个人资料承担保密义 务。</li>
          <li>7. 本人同意并授权:贵公司在履行对投保人、被保险人个人信息严格保密的基础上，有权将其个人信息披露给百星保险集团股份有限公司及其子公司(包括分支机构)，以及贵公司为投
            保人、被保险人进一步提供相关服务所需的第三方。</li>
          <li>8. 本人确认已在投保书中抄录以下内容:本人已阅读保险条款、产品说明书和投保提示书，了解本产品的特点和保单利益的不确定性。</li>
        </ul>
        <div class="text-sm mt-32 w-12/12 relative pl-8 pb-5 ml-3">
          <p>代理人：{{dataset.receipt.AgentEXName}}</p>
          <p class="my-3">销售机构：{{dataset.receipt.LCCont_AgentCom}}</p>
          <p>管理机构代码：{{dataset.Cont.ManageComCode}}</p>
          <p class="my-3">管理机构名称：{{dataset.Cont.ManageComName}}</p>
          <div class="absolute bgColor-1 w-2 h-32 bottom-0 left-0"></div>
          <div class="absolute bgColor-1 h-2 w-32 bottom-0 left-0"></div>
        </div>
        <div class="flex mt-8 w-11/12 text-sm ml-10">
          <div>投保人签章：</div>
          <div class="ml-48">被保险人/法定监护人签章：</div>
        </div>
        <div class="text-sm pl-64 ml-16 mt-10">签署日期：{{dataset.receipt.SysDate}}</div>

      </template>
    </a4-page>

  </div>
</template>

<script>
  import a4Page from '../../../layout/a4Page.vue'
  import ElectronicPolicyCard from '@/components/belstar/policy/ElectronicPolicyCard.vue'
  import ElectronicPolicyTable from '@/components/belstar/policy/ElectronicPolicyTable.vue'
  import ElectronicPolicyPlan from '@/components/belstar/policy/ElectronicPolicyPlan.vue'
  export default {
    //注册组件
    components: {
      a4Page,
      ElectronicPolicyCard,
      ElectronicPolicyTable,
      ElectronicPolicyPlan
    },
    //组件传值
    props: {
      dataset:Array
    }
  }
</script>

<style scoped>
  ul>li::before {
    content: "";
    background: #55B3DC;
    @apply inline-block w-3 h-3 rounded-lg mr-2 -ml-5;
  }
  
  .border-1 tr td{
    border-width:1.5px;
    @apply border-solid border-blue-300;
  }
  
  .border-1 tr td:not(:first-child){
    @apply text-center;
  }

/*选择 否 */
 table tr td:not(:first-child):nth-child(odd) span.circle {
    background: rgba(85, 179, 220, 1);
  }
/* 告知信息 背景*/
 table.font-sans tbody tr:nth-child(even) td {
    background: rgba(242, 242, 242, 1);
  } 

</style>
