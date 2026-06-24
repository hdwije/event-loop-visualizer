function third() {
  console.log('third() - executing');
  console.log('third() - done');
}

function second() {
  console.log('second() - before third');
  third();
  console.log('second() - after third');
}

function first() {
  console.log('first() - before second');
  second();
  console.log('first() - after second');
}

console.log('script start');
first();
console.log('script end');
