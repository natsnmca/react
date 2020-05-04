import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";
import Login from './components/loginnew/login';

it("sumbits the form", async () => {
  const onLogin = jest.fn();
  const { getByText, getByTestId } = render(<Login onLogin={onsubmit} />);

  expect(getByText("Enter your details below to continue")).toHaveClass("loginSub-txt");
  const emailInput = getByTestId("Email");
  const passwordInput = getByTestId("Password");
  const form = getByTestId("form");
  emailInput.value = 'vasanth.rajan@sword-in.com';
  passwordInput.value = 'admin123';
  act(() => {
  fireEvent.change(emailInput);
  fireEvent.change(passwordInput);
});
 expect(emailInput.value).toBe("vasanth.rajan@sword-in.com");
 expect(passwordInput.value).toBe("admin123");
  await act(() => {
    fireEvent.submit(form);
  });
  expect(onLogin).not.toHaveBeenCalled(); 

});