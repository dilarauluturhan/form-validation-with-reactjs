import React, { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex items-center justify-center">
      <div>
        <label className="block mb-2 text-md font-medium text-gray-900">
          {label}
        </label>
        <input
          {...inputProps}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md mb-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
          onBlur={handleFocus}
          onFocus={() => inputProps.name === "confirm" && setFocused(true)}
          focused={focused.toString()}
        />
        <span className="text-sm text-red-700 font-semibold hidden">
          {errorMessage}
        </span>
      </div>
    </div>
  );
};

export default FormInput;
