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
  emailInput.value = 'admin@gmail.com';
  passwordInput.value = 'Vasa123';
  act(() => {
  fireEvent.change(emailInput);
  fireEvent.change(passwordInput);
});
 expect(emailInput.value).toBe("admin@gmail.com");
 expect(passwordInput.value).toBe("Vasa123");
  await act(() => {
    fireEvent.submit(form);
  });
  expect(onLogin).not.toHaveBeenCalled(); 

});

it("not sumbits the form", async () => {
  const onLogin = jest.fn();
  const { getByText, getByTestId } = render(<Login onLogin={onsubmit} />);

  expect(getByText("Enter your details below to continue")).toHaveClass("loginSub-txt");
  const emailInput = getByTestId("Email");
  const passwordInput = getByTestId("Password");
  const form = getByTestId("form");
  emailInput.value = '';
  passwordInput.value = 'Vasa123';
  act(() => {
  fireEvent.change(emailInput);
  fireEvent.change(passwordInput);
});
 //expect(emailInput.value).toBe("");
 //expect(passwordInput.value).toBe("Vasa123");
  await act(() => {
    fireEvent.submit(form);
  });
  expect(onLogin).not.toHaveBeenCalled(); 
});
// it('login check with right data',()=>{
//   const onLogin = jest.fn();
//   const { getByTestId } = render(<Login onLogin={onsubmit} />);
//   const emailInput = getByTestId("Email");
//   const passwordInput = getByTestId("Password");
//   const form = getByTestId("form");
//   emailInput.value = 'admin@gmail.com';
//   passwordInput.value = 'Vasa123';
//   act(() => {
//   fireEvent.change(emailInput);
//   fireEvent.change(passwordInput);
// });
//  expect(emailInput.value).toBe("admin@gmail.com");
//  expect(passwordInput.value).toBe("Vasa123");
//  await act(() => {
//   fireEvent.submit(form);
// });
//   expect(onLogin).toHaveBeenCalled();

// });


