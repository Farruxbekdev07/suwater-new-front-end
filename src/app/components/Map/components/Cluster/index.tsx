import React, { FC, HTMLAttributes } from 'react';
import './index.css';

export interface ClusterProps extends HTMLAttributes<HTMLDivElement> {
  point_count: number;
}

const Cluster: FC<ClusterProps> = ({
  point_count,
  onClick,
  className = '',
  style = {},
  ...rest
}) => {
  const defaultStyle = {
    width: `${10 + point_count * 5}px`,
    height: `${10 + point_count * 5}px`,
  };

  return (
    <div
      className={`cluster ${className}`}
      style={{
        ...defaultStyle,
        ...style,
      }}
      onClick={onClick}
      {...rest}
    >
      {point_count}
    </div>
  );
};
export default Cluster;
