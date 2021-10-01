import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App'
import userEvent from "@testing-library/user-event"

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<App />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText("First Name:");
    userEvent.type(firstNameInput, "Jon");
    const lastNameInput = screen.getByLabelText("Last Name:");
    userEvent.type(lastNameInput, "Sawyers");
    const addressInput = screen.getByLabelText("Address:");
    userEvent.type(addressInput, "100 South St");
    const cityInput = screen.getByLabelText("City:");
    userEvent.type(cityInput, "Monroe Center");
    const stateInput = screen.getByLabelText("State:");
    userEvent.type(stateInput, "IL");
    const zipInput = screen.getByLabelText("Zip:");
    userEvent.type(zipInput, "61052");
    const button = screen.getByRole("button")
    userEvent.click(button)

    const successMessage = screen.getByText("You have ordered some plants! Woo-hoo!")
    expect(successMessage).toBeInTheDocument();
});
