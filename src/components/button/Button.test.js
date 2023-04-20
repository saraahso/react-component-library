import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders button text correctly", () => {
    const buttonText = "Click me!";
    const { getByText } = render(
      <Button onClick={() => {}} backgroundColor="blue">
        {buttonText}
      </Button>
    );
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button onClick={onClickMock} backgroundColor="blue">
        Click me!
      </Button>
    );
    fireEvent.click(getByRole("button"));
    expect(onClickMock).toHaveBeenCalled();
  });

  it("applies button size correctly", () => {
    const { getByRole } = render(
      <Button onClick={() => {}} backgroundColor="blue" size="small">
        Click me!
      </Button>
    );
    expect(getByRole("button")).toHaveClass("btn small");
  });
});
