import React from 'react';

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({
  children,
  ...props
}) => {
  const { className, ...inputProps } = props;

  return (
    <div className={`mb-4 ${className ?? ''}`}>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props?.id ?? ''}
      >
        {children}
      </label>
      <input
        className="shadow-md border border-solid border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-blue-500/50"
        {...inputProps}
      />
    </div>
  );
};
