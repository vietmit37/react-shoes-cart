type IImageElementProps = {
  bgColor?: string;
  name? : string;
  src: string;
}

function ImageElement({ src, name = '', bgColor = 'rgb(212, 215, 214)' }: IImageElementProps) {
  return (
    <div
      className="shopItem_image"
      style={{ backgroundColor: bgColor }}
    >
      <img
        alt={name}
        title={name}
        src={src}
      />
    </div>
  );
}

export default ImageElement;
