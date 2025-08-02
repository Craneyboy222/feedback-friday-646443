import React from 'react';

interface RadioProps {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({ name, label, value, checked, onChange }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
      />
      <label htmlFor={value} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default Radio;