function titleCase(str) {
  //making lowercase first then spliting the string into into word
  str=str.toLowerCase().split(" ")
    for(let i=0;i<str.length;i++){ //interate the sring
      str[i]=str[i].split('') //split each word to character
       str[i][0]=str[i][0].toUpperCase();//making first character to uppercase
      str[i]=str[i].join('')//joining all character to word
    }
    str=str.join(' ')//join word to make sentence
  return str;
}

titleCase("I'm a little tea pot");