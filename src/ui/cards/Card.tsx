import React from 'react';

interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
};
