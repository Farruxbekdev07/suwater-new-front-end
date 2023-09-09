import React from 'react';
import { useTranslation } from 'react-i18next';

interface IInputProps {
  placeholder?: string;
  value?: string | number;
  name?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
  onChange?: any;
  style?: any;
  label?: string;
  onBlur?: any;
  option?: any;
  defaultValue?: any;
  mode?: any;
  children: any;
}

const Select = ({
  placeholder,
  value,
  name,
  className,
  disabled = false,
  onChange,
  style,
  label,
  onBlur,
  option,
  defaultValue,
  mode,
  children,
}: IInputProps) => {
  const { t } = useTranslation();

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className={`block mb-2 text-sm font-sans text-gray-700 ${
            mode === true ? '' : ''
          }`}
        >
          {t(label ?? '')}
        </label>
      )}
      <select
        disabled={disabled}
        name={name}
        value={value}
        id={name}
        style={style}
        className={`bg-gray-50 border border-gray-300 bg-transparent ${
          mode === true ? 'text-gray-500' : 'text-gray-400'
        } text-sm rounded-xl h-[50px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
        placeholder={placeholder}
        onChange={onChange ? onChange : null}
        onBlur={onBlur}
        defaultValue={defaultValue}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
