import React from "react";
import "mutationobserver-shim";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait } from "@testing-library/react";
import ContactForm from "./ContactForm";

it("ContactForm renders without crashing!", () => {
  render(<ContactForm />);
});

test("firstName, lastName and email are rendered", () => {
  const { getByText } = render(<ContactForm />);

  getByText(/Last Name*/i);
  getByText(/First Name*/i);
  getByText(/Message/i);
});

describe("It's submit values are validated for the form", () => {
  test("firstName is defined", () => {
    const component = render(<ContactForm />)
    const firstName = component.getByTestId("firstName")
    expect(firstName).toBeDefined()
  })
})

describe("submits the values when submit is clicked", () => {
  test(" message is submitted when submit is clicked", async () => {
    const component = render(<ContactForm />)
    const message = component.getByTestId("Message")
    const button = component.getByTestId("submit")

    fireEvent.click(button)

    await wait(() => expect(message).toBeInTheDocument())
  })
})

