import React from "react";
import { InputItem, TextWrapper } from "../../molecules";
import { Button } from "../../atoms";
import useForm from "../../../validations/validateRegister";
import "./RegisterBody.scss";

const RegisterBody = () => {
  const { formValues, handleSubmit, formErrors, handleChange } = useForm();
  return (
    <div className="register-body">
      <TextWrapper
        heading="Register"
        className="register-heading register-child"
        children="We do not share your personal details with anyone"
      />
      <form
        onSubmit={handleSubmit}
        className="login-form login-child"
        autoComplete="off"
        action=""
        method="POST"
      >
        <InputItem
          type="text"
          id="first-name"
          name="firstName"
          label="First Name"
          value={formValues.firstName}
          errors={formErrors.firstName}
          onChange={handleChange}
        />

        <InputItem
          type="text"
          id="last-name"
          name="lastName"
          label="Last Name"
          value={formValues.lastName}
          errors={formErrors.lastName}
          onChange={handleChange}
        />

        <InputItem
          type="text"
          id="email"
          name="email"
          label="Email"
          value={formValues.email}
          errors={formErrors.email}
          onChange={handleChange}
        />

        <InputItem
          type="password"
          id="password"
          name="password"
          label="Password"
          value={formValues.password}
          errors={formErrors.password}
          onChange={handleChange}
        />

        <InputItem
          type="password"
          id="c-password"
          name="confirmPassword"
          label="Confirm Password"
          value={formValues.confirmPassword}
          errors={formErrors.confirmPassword}
          onChange={handleChange}
        />

        <Button buttonType="register">Register</Button>
      </form>
    </div>
  );
};
export default RegisterBody;
