import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const base =
    "px-4 py-2 rounded-xl font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary";

  const variantClasses = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-neutral-500 text-neutral-200 hover:bg-neutral-700",
    ghost: "text-neutral-300 hover:bg-neutral-700/40",
  };

  return (
    <button
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};