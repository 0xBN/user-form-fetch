import { useState } from 'react';

const FormRowDropDown = ({ type, id, label, options }) => {
  const [dataValue, setDataValue] = useState('');
  const handleChange = (e) => {
    setDataValue(e.target.value);
  };
  const dropdownOptions = ['cat', 'dog'];
  return (
    <div className={`flex flex-col`}>
      <label htmlFor={id}>{label}:</label>

      <select
        className={`text-black`}
        type={type}
        id={id}
        value={dataValue}
        onChange={handleChange}
        aria-label={label}
        placeholder={label}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
export default FormRowDropDown;
