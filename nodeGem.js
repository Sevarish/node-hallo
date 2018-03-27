console.log(process.argv);

let sum = 0;

for (i=2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

var amountLength = process.argv.length - 2;

console.log(sum);


var avg = sum / amountLength;

console.log(avg);
