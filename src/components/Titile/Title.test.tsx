import { render,screen  } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Title } from "./Title";

describe("Title component", () => {
 it("renders the title text", () => {
    render(<Title text="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    });
});