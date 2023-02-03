import React from "react";

interface Props {
  label: string;
  emoji: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ label, emoji, onClick }) => {
  return (
    <button
      className={`m-6 text-left rounded-xl flex-row justify-around sm:w-full bg-red-300 p-6 hover:text-white-600 focus:text-white-600`}
      onClick={onClick}
    >
      <span className="m-2 text-black text-3xl">
        {label}
      </span>
      <span className="m-2 text-white text-4xl">
        {emoji}
      </span>
    </button >
  );
};

export default Button;
