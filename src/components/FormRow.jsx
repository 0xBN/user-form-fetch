import { useState } from 'react';

const FormRow = ({ type, id, label }) => {
  const [dataValue, setDataValue] = useState('');
  const handleChange = (e) => {
    setDataValue(e.target.value);
  };
  return (
    <div className={`flex flex-col`}>
      <label htmlFor={id}>{label}:</label>
      <input
        className={`text-black`}
        type={type}
        id={id}
        value={dataValue}
        onChange={handleChange}
        aria-label={label}
        placeholder={label}
      />
    </div>
  );
};
export default FormRow;
