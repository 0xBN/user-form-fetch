import { useState } from 'react';

const FormRowDropDown = ({
  type,
  id,
  label,
  options,
  dataType,
  setIsValid,
  required,
  pattern,
  isValid,
}) => {
  const [dataValue, setDataValue] = useState('');
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setDataValue(e.target.value);
    if (value.trim() === 'Select an option...') {
      setIsValid(false);
    } else {
      validate(value);
    }
  };

  const validate = (value) => {
    if (required && value.trim() === '') {
      setIsValid(false);
    } else if (pattern && new RegExp(pattern).test(value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleBlur = () => {
    if (!hasBeenClicked) {
      setHasBeenClicked(true);
    }
  };

  return (
    <div className={`flex flex-col`}>
      <label className={`font-bold`} htmlFor={id}>
        {label}
      </label>
      <select
        className={` rounded-sm p-2 text-black ${
          !isValid && hasBeenClicked && 'rounded-sm ring-2 ring-red-500'
        }
        ${isValid && 'rounded-sm ring-2 ring-green-500 '}
        `}
        type={type}
        id={id}
        value={dataValue}
        onChange={handleChange}
        aria-label={label}
        placeholder={label}
        onBlur={handleBlur}
      >
        {dataType === 'object' &&
          options.map((option) => (
            <option key={option.abbreviation}>{option.name}</option>
          ))}
        {dataType === 'array' &&
          options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
};
export default FormRowDropDown;
