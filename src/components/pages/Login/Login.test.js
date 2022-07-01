import Login from "./Login"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Login credentials form on submit", () => {
    const login = {
        email: "john@sapient.com",
        password: "doe12",
    };

    let emailInput, passwordInput, submitButton;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
        );

        emailInput = screen.getByLabelText(/Email/i);
        passwordInput = screen.getByLabelText(/Password/i);
        submitButton = screen.getByRole("button", { name: /Login/i });

        userEvent.clear(emailInput);
        userEvent.clear(passwordInput);
    });
    const fillAndSubmit = (credentials) => {
        userEvent.type(emailInput, credentials.email);
        userEvent.type(passwordInput, credentials.password);
        userEvent.click(submitButton);
    };
    test("should display error when email is not filled", async () => {
        fillAndSubmit({
            ...login,
            email: "",
        });
        const errorMessageEl = await screen.findByText(/Email is required/i);
        expect(errorMessageEl).toBeInTheDocument();
    });

    test("should display error when password is not filled", async () => {
        fillAndSubmit({
            ...login,
            password: "",
        });
        const errorMessageEl = await screen.findByText(/Password is required/i);
        expect(errorMessageEl).toBeInTheDocument();
    });  
});
