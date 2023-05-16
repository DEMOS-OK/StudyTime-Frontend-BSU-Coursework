interface ButtonProps {
  onClick?: (e: any) => void;
  text: string;
  disabled?: boolean;
}

const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className="h-12 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-lg
      shadow-md transition-all hover:scale-105 text-white"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
