import React from 'react';
import { useTranslation } from 'react-i18next';

type Types = 'outline' | 'primary';

interface IButtonProps {
  children?: any;
  style?: any;
  label?: string;
  className?: string;
  onClick?: any;
  leftIcon?: any;
  rightIcon?: any;
  type?: Types;
  mode?: any;
}

const Button = ({
  label,
  children,
  className,
  style,
  onClick,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  type,
  mode,
}: IButtonProps) => {
  const { t } = useTranslation();

  const buttonTypes = {
    primary: 'bg-blue-700 text-white border-blue-700',
    outline: `bg-transparent border-gray-600 hover:text-blue-700 hover:border-blue-700 hover:opacity-100 ${
      mode === true ? 'text-blue-800 border border-blue-600 ' : 'text-white'
    }`,
  };

  return (
    <button
      style={style}
      className={`flex items-center gap-2 border py-2.5 px-5 transition duration-150 hover:opacity-80 rounded-lg text-sm ${
        buttonTypes[type ?? 'primary']
      } ${className}`}
      onClick={onClick}
      type="submit"
    >
      {LeftIcon && <LeftIcon className="w-5 h-5" />} {t(label ?? '')}{' '}
      {!label ? children : null}{' '}
      {RightIcon && <RightIcon className="w-5 h-5" />}
    </button>
  );
};

export default Button;
