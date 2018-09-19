import balanceReducer from "./balance";
import * as constants from "../actions/constants";

describe("balanceReducer", () => {
  it("sets a balance", () => {
    const balance = 10;

    expect(
      balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
    ).toBe(balance);
  });

  it("deposits into your balance", () => {
    const deposit = 10;
    const initialState = 5;

    expect(
      balanceReducer(initialState, { type: constants.DEPOSIT, deposit })
    ).toBe(15);
  });

  it("withdraws infrom your balance", () => {
    const withdraw = 10;
    const initialState = 15;

    expect(
      balanceReducer(initialState, { type: constants.WITHDRAW, withdraw })
    ).toBe(5);
  });
});
