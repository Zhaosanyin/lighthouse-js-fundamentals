//计算日期在每一年的天数
//利用穿透，不加break语句的案例
var year = 2008;
var month = 8;
var day =8;
var total =0;

switch (month){
  case 12: total +=30;
  case 11: total +=31;
  case 10: total +=30;
  case 9:  total +=31;
  case 8:  total +=30;
  case 7:  total +=30;
  case 6:  total +=31;
  case 5:  total +=30;
  case 4:  total +=31;
  case 3:  total +=31;
  case 2: 
  //闰年或者不是闰年
  if(year%4===0 && year % 100 !==0|| year %400===0){
    total +=29
  }else {
    total +=28
  }
}

total += day;
console.log(total);