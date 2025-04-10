import React from 'react';

interface PrimaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      {children}
    </button>
  );
};
