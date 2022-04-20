export const idMaker = function* () {
  let index = 0;

  while (true) {
    yield index++;
  }
};

function* anotherGenerator(i: number) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
  return "done";
}

function* logGenerator(): Generator<void, any, string> {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

logGenerator().next("d")
