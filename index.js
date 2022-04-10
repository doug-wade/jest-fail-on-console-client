module.exports = {
  allFour: (msg) => {
    console.error(msg);
    console.warn(msg);
    console.log(msg);
    console.assert(false, "false");
  },
  assertFailure: () => {
    console.assert(false, "false");
  },
  assertSuccess: () => {
    console.assert(true, "true");
  },
  log: (msg) => {
    console.log(msg);
  },
};
