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
  mode?: any;
}

const Input = ({
  placeholder,
  value,
  name,
  type = 'text',
  className,
  disabled = false,
  maxLength,
  onChange,
  style,
  label,
  onBlur,
  mode,
}: IInputProps) => {
  const { t } = useTranslation();

  return (
    <div className={`relative  h-[50px]`}>
      <input
        disabled={disabled}
        maxLength={maxLength}
        type={type}
        name={name}
        value={value}
        id={name}
        style={style}
        className={`block px-2.5 pb-2.5 pt-4 h-full w-full text-sm text-gray-700 bg-transparent rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${className} ${
          mode === true ? 'text-black' : 'text-white'
        }`}
        placeholder={placeholder}
        onChange={e => {
          if (type === 'file') {
            return onChange ? onChange(e?.target?.files) : null;
          } else {
            return onChange ? onChange(e?.target?.value) : null;
          }
        }}
        onBlur={onBlur}
      />
      {label && (
        <label
          htmlFor={name}
          className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
        >
          {t(label ?? '')}
        </label>
      )}
    </div>
  );
};

export default Input;
