import React from "react";
import { InputItem, TextWrapper } from "../../molecules";
import "./LoginBody.scss";
import useFormLogin from "../../../validations/validateLogin";
import { Button } from "../../atoms";

const LoginBody = () => {
  const { formValues, handleSubmit, formErrors, handleChange } = useFormLogin();
  return (
    <div className="login-body">
      <TextWrapper
        heading="Login"
        className="login-heading login-child"
        children="Get access to your Orders, Wishlist and Recommendations"
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

        <Button buttonType="login">Login</Button>
      </form>
    </div>
  );
};
export default LoginBody;
