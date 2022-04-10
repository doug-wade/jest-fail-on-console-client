module.exports = {
  allFour: (msg) => {
    console.error(msg);
    console.warn(msg);
    console.log(msg);
    console.assert(1 === 1, "1 === 1");
  },
  assertFailure: () => {
    console.assert(1 === 2, "1 === 2");
  },
  assertSuccess: () => {
    console.assert(1 === 1, "1 === 1");
  },
  log: (msg) => {
    console.log(msg);
  },
};
