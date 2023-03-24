import { render, screen } from "@testing-library/react";
import Card from "@/src/components/Card";
import Header from "@/src/components/Header";

import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Card", () => {
  it("renders a Card with title", () => {
    render(<Card href={"/home"} title={"Next Launch"} />);

    const title = screen.getByRole("heading", {
      name: /Next launch ->/i,
    });

    expect(title).toBeInTheDocument();
  });
});

describe("Header", () => {
  it("renders a Header with button when outside home", () => {
    useRouter.mockImplementation(() => ({
      route: "/wxy",
      pathname: "/xwy",
      query: "",
      asPath: "",
    }));
    render(<Header />);
    const title = screen.queryByText(/< Back/i);
    expect(title).toBeInTheDocument();
  });

  it("renders a Header without button when home", () => {
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "/",
      query: "",
      asPath: "",
    }));
    render(<Header />);
    const title = screen.queryByText("button", {
      name: /< Back/i,
    });

    expect(title).not.toBeInTheDocument();
  });
});
