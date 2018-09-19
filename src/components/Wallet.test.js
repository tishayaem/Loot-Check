import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./Wallet";

describe("Wallet", () => {
  const mockDeposit = jest.fn()
  const props = { balance: 20, deposit: mockDeposit };
  const wallet = shallow(<Wallet {...props} />);

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("displays the balance from props", () => {
    expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20");
  });

  it("creates an input to deposit into or withdraw from balance", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  }); 

  describe("when the user types into the input", () => {
    const userBalance = "25";

    beforeEach(() => {
      wallet
        .find(".input-wallet")
        .simulate("change", { target: { value: userBalance } });
    });

    it("updates the local wallet balance in `state` and converts it to a number", () => {
      expect(wallet.state().balance).toBe(Number(userBalance));
    });

    describe('and the user wants to make a deposit', () => {
        beforeEach(() => {
            wallet.find('.btn-deposit').simulate('click')
        })

        it('dispatches the `deposit()` it receives from props with local balance', () => {
            expect(mockDeposit).toHaveBeenCalledWith(Number(userBalance))
        })
    })
  });
});
