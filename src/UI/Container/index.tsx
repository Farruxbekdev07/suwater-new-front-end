import React from 'react';

interface IContainerProps {
  children: any;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div className="max-w-7xl w-full relative my-0 mx-auto py-10 px-4 min-h-screen">
      {children}
    </div>
  );
};

export default Container;
