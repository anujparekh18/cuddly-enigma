//Truncate a String 

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num >= str.length){
  return str.substring(0,num);
  }else{
    return str.substring(0,num)+"...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);