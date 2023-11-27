export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* no unused variables by eslint-disabled */
    var task = true;
    var task2 = false;
    /* eslint-enable no-unused-vars */
  }

  return [task, task2];
}
