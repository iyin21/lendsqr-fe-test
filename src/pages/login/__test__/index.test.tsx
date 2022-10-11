import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../index";
import { BrowserRouter } from "react-router-dom";

test("shows Login Page", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const mainHeading = screen.getByTestId("main-heading");
  const subHeading = screen.getByTestId("sub-heading");
  expect(mainHeading).toHaveTextContent("Welcome!");
  expect(subHeading).toHaveTextContent("Enter details to login.");

  // userEvent.type(screen.getByTestId('email_input'), '700000');
  // userEvent.type(screen.getByTestId('password_input'), '900000');
  // userEvent.click(screen.getByRole('button', { name: 'filter' }));
});
test("input field works", async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  userEvent.type(screen.getByTestId("email_input"), "seun@gmail.com");
  userEvent.type(screen.getByTestId("password_input"), "Pas1wo@rd");
  await waitFor(() => {
    expect(screen.getByTestId("email_input")).toHaveValue("seun@gmail.com");
  });
  await waitFor(() => {
    expect(screen.getByTestId("password_input")).toHaveValue("Pas1wo@rd");
  });
});

test("login button", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  userEvent.click(screen.getByRole("button", { name: "LOG IN" }));
  //await waitFor(() => {
    expect(window.location.pathname).toBe("/user");
  //});
});
