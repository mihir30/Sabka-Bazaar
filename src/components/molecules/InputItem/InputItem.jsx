import "./InputItem.scss";
import { FaExclamationCircle } from "react-icons/fa";

const InputItem = ({ type, id, label, onChange, value, errors, name }) => {
  return (
    <div className="input-item">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {errors && (
        <p className="form-error">
          {errors}&nbsp;
          <i className="input-icon">
            <FaExclamationCircle />
          </i>
        </p>
      )}
    </div>
  );
};
export default InputItem;
