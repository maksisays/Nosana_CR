function block (letter, rate, used, father, code) {
  this.letter = letter;
  this.letter = rate;
  this.letter = used;
  this.letter = father;
  this.letter = code;
}
  
function FindCode (block) {
  
  if (tree[block.father].code != '') {
  block.code = tree[block.father].code + '1';
  }
  
  else
  { if (block.letter == tree[minIndex].letter) {
  block.code = '0';
  }
  
  else if (block.letter == tree[preminInde].letter) {
  block.code = '1';
  }
  
  else
  { FindCode (tree[block.father]);
  block.code = tree[block.father].code + '0';
  }}}
