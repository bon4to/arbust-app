import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`rounded-2xl bg-neutral-800 border border-neutral-700 shadow-sm p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({ className = "", children, ...props }) => {
  return (
    <div className={`text-neutral-200 ${className}`} {...props}>
      {children}
    </div>
  );
};