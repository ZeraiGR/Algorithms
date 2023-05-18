// Text Justification
// https://leetcode.com/problems/text-justification/

// Tags: Array, String, Simulation

const fullJustify = function(words, maxWidth) {
  const res = [];
  let buf = [];
  let width = maxWidth;

  words.forEach(word => {
      if (word.length <= (width - buf.length)) {
          buf.push(word);
          width -= word.length;
      } else {
          addWordToResult(res, buf.slice(), maxWidth);
          
          buf = [word];
          width = maxWidth - word.length;
      }
  });

  if (buf.length) {
      let str = buf.join(' ');
      str += ' '.repeat(maxWidth - str.length);
      res.push(str);
  }
  
  return res;
};

function addWordToResult(res, buf, maxWidth) {
    let spaces = maxWidth - buf.reduce((acc, cur) => cur.length + acc, 0);
    
    if (buf.length === 1) {
        buf[0] += ' '.repeat(spaces);
        res.push(buf[0]);
        return;
    }
    
    spaces -= buf.length - 1;
    
    const end = buf.length - 1;
    let index = 0;
    
    while (spaces-- > 0) {
        buf[index] += ' ';
        
        index = (index + 1) % end;
    }
    
    res.push(buf.join(' '))
}

// console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));

// console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));

// console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20));

// console.log(fullJustify(["The","important","thing","is","not","to","stop","questioning.","Curiosity","has","its","own","reason","for","existing."], 17));

// console.log(fullJustify(["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"], 16));

console.log(fullJustify(["Don't","go","around","saying","the","world","owes","you","a","living;","the","world","owes","you","nothing;","it","was","here","first."], 30));

console.log(fullJustify(["Give","me","my","Romeo;","and,","when","he","shall","die,","Take","him","and","cut","him","out","in","little","stars,","And","he","will","make","the","face","of","heaven","so","fine","That","all","the","world","will","be","in","love","with","night","And","pay","no","worship","to","the","garish","sun."], 25));