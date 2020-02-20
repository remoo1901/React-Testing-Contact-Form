import React from "react";
import 'mutationobserver-shim';
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}
