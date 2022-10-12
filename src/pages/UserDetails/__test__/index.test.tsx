import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserDetails from "../index";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { UserDetailsData } from "../../../mocks/data";

jest.mock("axios");

test("shows User details Page", async () => {
  (axios.get as jest.Mock).mockResolvedValue({ data: UserDetailsData });
  render(
    <BrowserRouter>
      <UserDetails />
    </BrowserRouter>
  );
  const mainHeading = await waitFor(() => screen.getByTestId("main-heading"));
  const generalContainer = await waitFor(() =>
    screen.getByTestId("generalContainer")
  );
  const personalContainer = await waitFor(() =>
    screen.getByTestId("personalContainer")
  );
  expect(mainHeading).toBeInTheDocument();

  expect(generalContainer).toBeInTheDocument();

  expect(personalContainer).toBeInTheDocument();

  await waitFor(() => {
    screen.getAllByText("Mia Padberg").forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
  await waitFor(() => {
    expect(screen.getByText("User’s Tier")).toBeInTheDocument();
  });
  await waitFor(() => {
    screen.getAllByText("EMAIL ADDRESS").forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
  await waitFor(() => {
    expect(screen.getByText("Personal Information")).toBeInTheDocument();
  });
  await waitFor(() => {
    screen.getAllByText("FULL NAME").forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
  await waitFor(() => {
    expect(screen.getByText("Education and Employment")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Bsc")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Socials")).toBeInTheDocument();
  });
  await waitFor(() => {
    screen.getAllByText("@lendsqr").forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
  await waitFor(() => {
    screen.getAllByText("Guarantor").forEach((item) => {
        expect(item).toBeInTheDocument();
      });
  });
  await waitFor(() => {
    screen.getAllByText("Johnathon Hane").forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    
  });
});

test("if back button works", async () => {
  (axios.get as jest.Mock).mockResolvedValue({ data: UserDetailsData });
  render(
    <BrowserRouter>
      <UserDetails />
    </BrowserRouter>
  );
  await waitFor(() => userEvent.click(screen.getByTestId("backBtn")));
  expect(window.location.pathname).toBe("/");
});

//eslint-config-prettier eslint-plugin-react eslint-plugin-import