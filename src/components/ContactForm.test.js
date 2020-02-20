import React from "react";
import "mutationobserver-shim";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("ContactForm renders without crashing!", () => {
  render(<ContactForm />);
});

test("firstName, lastName and email are rendered", () => {
  const { getByText } = render(<ContactForm />);

  getByText(/Last Name*/i);
  getByText(/First Name*/i);
  getByText(/Message/i);
});
