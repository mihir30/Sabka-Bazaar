import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useForm() {
  const navigate = useNavigate();
  const initialvalues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState({ initialvalues });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(()=>{
    const localEmail = (formValues.email);
    if(localEmail){
        localStorage.setItem("Email", localEmail);
    }
})

const getEmail = () => {
    const email = (localStorage.getItem('Email'))
     return email;
};
const removeEmail = () => {
   localStorage.removeItem('Email')
    
};


window.onbeforeunload = function (e) {
    localStorage.removeItem('Email');    
    
};

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "This is not a valid password format";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password do not match";
    }

    return errors;
  };

  return {
    validate,
    formValues,
    setFormValues,
    formErrors,
    handleSubmit,
    handleChange,
    getEmail,
    removeEmail
  };
}
export default useForm;
