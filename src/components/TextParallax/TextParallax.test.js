import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextParallax from "./TextParallax";

describe("Button", () => {
  it("renders button text correctly", () => {
    const buttonText = "Click me!";
    const { getByText } = render(
      <TextParallax onClick={() => {}} backgroundColor="blue">
        {buttonText}
      </TextParallax>
    );
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <TextParallax onClick={onClickMock} backgroundColor="blue">
        Click me!
      </TextParallax>
    );
    fireEvent.click(getByRole("button"));
    expect(onClickMock).toHaveBeenCalled();
  });

  it("applies button size correctly", () => {
    const { getByRole } = render(
      <TextParallax onClick={() => {}} backgroundColor="blue" size="small">
        Click me!
      </TextParallax>
    );
    expect(getByRole("button")).toHaveClass("btn small");
  });
});
