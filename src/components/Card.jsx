import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;