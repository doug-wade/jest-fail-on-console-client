const { allFour, assertSuccess, assertFailure, log } = require(".");

describe("test client", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("all four", () => {
    const mockMessage = "I'm a message";
    jest.spyOn(console, "warn");
    jest.spyOn(console, "error");

    allFour(mockMessage);

    expect(console.warn).toHaveBeenCalledWith(mockMessage);
    expect(console.error).toHaveBeenCalledWith(mockMessage);
  });

  it("console logs", () => {
    const mockMessage = "I'm a different message";

    log(mockMessage);
  });

  it("asserts success", () => {
    const mockMessage = "derp";

    assertSuccess(mockMessage);
  });

  it("asserts failure", () => {
    const mockMessage = "merp";

    assertFailure(mockMessage);
  });
});
