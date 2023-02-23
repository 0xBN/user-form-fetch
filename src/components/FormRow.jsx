import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const FormRow = ({
  type,
  id,
  label,
  required,
  minLength,
  maxLength,
  pattern,
  setIsValid,
  isValid,
}) => {
  const [dataValue, setDataValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setDataValue(e.target.value);
    if (value.trim() === '') {
      setErrorMessage('');
      setShowMessage(false);
      setIsValid(false);
    } else {
      validate(value);
    }
  };

  const validate = (value) => {
    if (required && value.trim() === '') {
      setErrorMessage(`${label} is required`);
      setShowMessage(true);
      setIsValid(false);
    } else if (minLength && value.length < minLength) {
      setErrorMessage(`${label} must be at least ${minLength} characters long`);
      setShowMessage(true);
      setIsValid(false);
    } else if (maxLength && value.length > maxLength) {
      setErrorMessage(
        `${label} must be less than ${maxLength} characters long`
      );
      setShowMessage(true);
      setIsValid(false);
    } else if (pattern && !new RegExp(pattern).test(value)) {
      setErrorMessage(`Invalid ${label} format`);
      setShowMessage(true);
      setIsValid(false);
    } else {
      setShowMessage(false);
      setErrorMessage('');
      setIsValid(true);
    }
  };

  return (
    <div className={`flex flex-col`}>
      <label className={`font-bold`} htmlFor={id}>
        {label}
      </label>
      <input
        className={`rounded-sm text-black ${
          !isValid && showMessage && 'rounded-sm ring-2 ring-red-500'
        }
        ${isValid && 'rounded-sm ring-2 ring-green-500 '}
        `}
        type={type}
        id={id}
        value={dataValue}
        onChange={handleChange}
        aria-label={label}
        placeholder={label}
      />
      {
        <p
          className={`absolute translate-y-16 rounded-md border bg-red-800 p-2 transition duration-100 ease-in ${
            showMessage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {errorMessage}
        </p>
      }
    </div>
  );
};
export default FormRow;
