module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let pairs = {};
  let same = [];

  bracketsConfig.forEach(element => {
    openBrackets.push(element[0]);
    pairs[element[1]] = element[0];
    if(element[1] === element[0]) {
      same.push(element[0]);
    }
  });

  let stack = [];
  let array = str.split('');

  for (let i = 0; i < array.length; i++) {
    if(openBrackets.includes(array[i])) {
      same.includes(array[i]) && stack[stack.length - 1] === array[i] ? stack.pop() : stack.push(array[i]);
    } else {
      if(!stack.length) {
        return false;
      }

      let top = stack[stack.length - 1];

      if(pairs[array[i]] === top) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length ? false : true;
}
