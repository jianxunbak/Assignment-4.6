const targetFn = require("./controller");

describe("the print function", () => {
  // standard best practice
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should respond with 'hello everyone here!'", () => {
    const mockReq = {};
    const mockRes = {
      send: jest.fn(),
    };

    targetFn(mockReq, mockRes);
    expect(mockRes.send).toHaveBeenCalledWith("Hello everyone here!"); // If you change this value, the test will fail.
  });
});
