const input = 'aaaabbbccdddaa';
let output = '';

let previous = '';
for (let i of input) {
  if (previous !== i) {
    previous = i;
    output = output + i + 0;
  }

  let value = +output[output.length - 1];
  output = output.slice(0, output.length - 1) + ++value;
}

console.log(output);
