import React, { type SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({ id, label, options, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-neutral-300 mb-2">
        {label}
      </label>
      <select
        id={id}
        className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-xl text-white
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
                   transition duration-200"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-neutral-700 text-white">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;