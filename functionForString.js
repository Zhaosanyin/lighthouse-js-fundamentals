

// 用循环语句， 来循环string sound


var sound = " ";
function laugh (num){
  for (i = 0; i < num; i ++){
    sound = sound + "ha";
    
  }
  sound = sound + "!";
  return sound;
}

console.log (laugh (3));