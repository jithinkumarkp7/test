import { render,screen  } from "@testing-library/react";
import { describe, expect, it } from "vitest"
import { Button } from "./Button";

describe("Button component", () => {
  it("renders the button label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
    it('applies disabled state', () => {
    render(<Button label="Submit" disabled />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
});