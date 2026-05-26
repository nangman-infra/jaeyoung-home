import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "@/app/layout";
import Home from "@/app/page";

describe("app shell", () => {
  it("renders the home route through the portfolio page", () => {
    render(<Home />);

    expect(screen.getByRole("main")).toHaveAttribute("lang", "ko");
    expect(screen.getByRole("heading", { level: 1, name: "유재영" })).toBeInTheDocument();
  });

  it("exports portfolio metadata and wraps children in html/body", () => {
    expect(metadata.title).toBe("유재영 | Portfolio");
    expect(metadata.description).toContain("한국어/영어 포트폴리오");

    const tree = RootLayout({ children: <div>layout child</div> });

    expect(React.isValidElement(tree)).toBe(true);

    if (!React.isValidElement(tree)) {
      throw new Error("RootLayout did not return a valid React element");
    }

    expect(tree.type).toBe("html");
    expect(tree.props.lang).toBe("ko");

    const body = React.Children.only(tree.props.children);

    expect(React.isValidElement(body)).toBe(true);

    if (!React.isValidElement(body)) {
      throw new Error("RootLayout body wrapper is invalid");
    }

    expect(body.type).toBe("body");
  });
});
