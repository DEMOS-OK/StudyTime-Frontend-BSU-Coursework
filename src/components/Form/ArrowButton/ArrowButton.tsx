import Direction from "./Enums/Direction";
import leftArrow from "../../../../public/img/arrow-left.svg";
import rightArrow from "../../../../public/img/arrow-right.svg";
import { CSSProperties } from "react";

interface ArrowButtonProps {
  direction: Direction;
  size?: string;
  onClick: (e: any) => void;
}

const ArrowButton = ({ direction, size, onClick }: ArrowButtonProps) => {
  let img;
  if (direction === Direction.Left) {
    img = leftArrow;
  } else if (direction === Direction.Right) {
    img = rightArrow;
  }

  const css: CSSProperties = {};

  if (size) {
    css.width = size;
    css.height = size;
  }

  return (
    <button onClick={onClick}>
      <img
        src={img.src}
        alt="test"
        style={css}
        className="transition-all hover:scale-110"
      />
    </button>
  );
};

export default ArrowButton;
