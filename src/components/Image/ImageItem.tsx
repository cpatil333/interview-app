import type { Images } from "../../types/imageTypes";

type ImagesProps = {
  images: Images;
};

const ImageItem = ({ images }: ImagesProps) => {
  return (
    <div>
      <div>
        <img key={images.id} src={images.url} title={images.title} />
      </div>
    </div>
  );
};

export default ImageItem;
