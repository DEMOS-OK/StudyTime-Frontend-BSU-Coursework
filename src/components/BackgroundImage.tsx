import { CSSProperties } from "react";

interface BackgroundImageProps {
  src: string;
}

const BackgroundImage = ({ src }: BackgroundImageProps) => {
  const wrapperCSS: CSSProperties = {
    filter: "brightness(40%)",
    position: "absolute",
    zIndex: "-1",
    top: 0,
    width: "100%",
  };

  const imageCSS: CSSProperties = {
    width: "100%",
    height: "1080px",
    filter: "blur(2px)",
    objectFit: "cover",
  };

  return (
    <div style={wrapperCSS}>
      <img src={src} alt="" style={imageCSS} />
    </div>
  );
};

export default BackgroundImage;
