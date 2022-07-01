import Register from "./Register"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


describe("Login credentials form on submit", () => {
    const register = {
        firstName: "john",
        lastName: "doe",
        email: "john@sapient.com",
        password: "doe12",
        confirmPassword: "doe12"
    };

    let firstNameInput, lastNameInput, emailInput, confirmPasswordInput, submitButton;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(
            
                <BrowserRouter>
                    <Register/>
                </BrowserRouter>
         
        );
        firstNameInput = screen.getByLabelText(/First Name/i);
        lastNameInput = screen.getByLabelText(/Last Name/i);
        emailInput = screen.getByLabelText(/Email/i);
        confirmPasswordInput = screen.getByLabelText(/Confirm Password/i);
        submitButton = screen.getByRole("button", { name: /Register/i });

        userEvent.clear(firstNameInput);
        userEvent.clear(lastNameInput);
        userEvent.clear(emailInput);
        userEvent.clear(confirmPasswordInput);
    });
    const fillAndSubmit = (credentials) => {
        userEvent.type(firstNameInput, credentials.firstName );
        userEvent.type(lastNameInput, credentials.lastName);
        userEvent.type(emailInput, credentials.email);
        userEvent.type(confirmPasswordInput, credentials.confirmPassword)
        userEvent.click(submitButton);
    };
    test("should display error when first name is not filled", async () => {
        fillAndSubmit({
            ...register,
            firstName: "",
        });
        const errorMessageEl = await screen.findByText(/First Name is required/i);
        expect(errorMessageEl).toBeInTheDocument();
    });

    test("should display error when last name is not filled", async () => {
        fillAndSubmit({
            ...register,
            lastName: "",
        });
        const errorMessageEl = await screen.findByText(/Last Name is required/i);
        expect(errorMessageEl).toBeInTheDocument();
    });


    test("should display error when email is not filled", async () => {
        fillAndSubmit({
            ...register,
            email: "",
        });
        const errorMessageEl = await screen.findByText(/Email is required/i);
        expect(errorMessageEl).toBeInTheDocument();
    });

    test("should display error when confirm password is not filled", async () => {
        fillAndSubmit({
            ...register,
            confirmPassword: "",
        });
        const errorMessageEl = await screen.findByText(/Confirm Password is required/i);
        expect(errorMessageEl).toBeInTheDocument();
    });
});
