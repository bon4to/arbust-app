import React, { type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ id, label, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-neutral-300 mb-2">
        {label}
      </label>
      <input
        id={id}
        className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-xl text-white placeholder-neutral-400
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
                   transition duration-200"
        {...props}
      />
    </div>
  );
};

export default Input;