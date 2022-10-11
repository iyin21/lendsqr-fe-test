import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "../index";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { useGetUsers } from "../../../hooks/users.hook";
import { UserData } from "../../../mocks/data";

jest.mock("axios");

test("shows users Page", async () => {
  (axios.get as jest.Mock).mockResolvedValue({ data: UserData });

  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const mainHeading = await waitFor(() => screen.getByTestId("main-heading"));
  const card = await waitFor(() => screen.getByTestId("card"));
  const tableContainer = await waitFor(() =>
    screen.getByTestId("table-container")
  );

  //await waitFor(() => {
  expect(mainHeading).toBeInTheDocument();
  //});
  expect(card).toBeInTheDocument();

  // await waitFor(() => {
  expect(tableContainer).toBeInTheDocument();
  //});
  await waitFor(() => {
    expect(screen.getByText("organization")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Username")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Phone number")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Date joined")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Status")).toBeInTheDocument();
  });
});

test("if filter dropdown works", async () => {
  (axios.get as jest.Mock).mockResolvedValue({ data: UserData });

  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  await waitFor(() => userEvent.click(screen.getAllByTestId("filter_icon")[0]));
  await waitFor(() => {
    expect(screen.getByTestId("filter_menu")).toBeInTheDocument();
  });
});

test("if menu icon on the table works", async () => {
  (axios.get as jest.Mock).mockResolvedValue({ data: UserData });
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  await waitFor(() => userEvent.click(screen.getAllByTestId("menu_icon")[0]));
  await waitFor(() => {
    expect(screen.getByTestId("menu_dropdown")).toBeInTheDocument();
  });
});
