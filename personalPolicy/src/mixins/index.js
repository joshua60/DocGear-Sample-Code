//@ts-check
const mixin = {
    data(){
      return{
        newArr:[],
      }
    },
    methods: {
      //对象转换数组,data是要处理的数据，比如dataset.RISKALL.ROW
      objToArr: function(data){
        var hash = []
        if(!data.length){
          hash[0] = data
        }else{
          hash = data
        }
        return hash
      },
      //去重凭证号
      getNewArray:function(arr,key){
        const set=new Set();
        this.newArr = arr.filter(item => !set.has(item[key]) ? set.add(item[key]) : false);
        //console.log(this.newArr); 
        return this.newArr;
      },
       // 保留两位小数，整数部分逢三断一过滤器
        // value代表要处理的值，unit代表单位，flag是true或者是false。true代表需要小数，false表示不需要
      NumFormat: function(value,unit,flag){
        if(!value ||value.trim() == ''||value=='\\'){
            return '\\';
          }
        if(value == '-'){
          return '-'
        }
        var num = value.replace(/[\D]|[\.]/g,'')
        var str = value.replace(/[0-9]|[\.]/g,'')
        if(num == '' || num == 'undefined'){
          return str
        }

        value = parseFloat(value).toFixed(2)
        var intPart =  Number(value)|0; //获取整数部分
        var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
        //=2表示数据有小数位
        
        if(flag){
          var floatPart = value.toString().split(".");
              return intPartFormat +"."+ floatPart[1]+ (str?str:unit);
        }else{
              return intPartFormat+ (str?str:unit);
        }
      },
      //判空
      isEmpty: function(data){
        if(!data ||data.trim() == '' || data == '\\'){
          return "\\"
        }else{
          return data
        }
      },
       //转换成整数百分数过滤器
      toPercent:function(point){
          if(!point && point.trim() !=''){
              if (point==0) {
                  return 0;
              }
              var str=Number(point*100).toFixed();
              str+="%";
              return str; 
          }else{
              
              return '\\';
          }     
          
      },
      //转换成保留两位小数的百分数过滤器
      toPercentFloat:function(point){
           if(point && point.trim() !=''){
              if (point==0) {
                  return 0;
              }
              var str=Number(point*100).toFixed(2);
              str+="%";
              return str; 
          } else{
            return "\\"
          }   
          
      }
    },
   
}

export default mixin