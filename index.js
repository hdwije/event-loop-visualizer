function third() {
  console.log('Third');
}

function second() {
  console.log('second - before third');
  third();
  console.log('second - after third');
}

function first() {
  console.log('first - before second');
  second();
  console.log('first - after second');
}

first();
console.log('script done');

/**
 * first - before second
 * second - before third
 * Third
 * second - after third
 * first - after second
 * script done
 */