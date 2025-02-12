import React, { useState } from "react";

type InputProps = {
  name: string;
  placeholder: string;
  value?: string
}

const Input = ({name,placeholder,value}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>(value ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name={name}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
    />
  )
};

export default Input;
