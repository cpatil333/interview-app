import ImageItem from "./ImageItem";
import type { Images } from "../../types/imageTypes";
import { useState } from "react";
import styles from "../../module/images.module.css";

const initialData: Images[] = [
  {
    id: 1,
    url: "https://picsum.photos/id/1015/600/300",
    title: "Nature",
  },
  {
    id: 2,
    url: "https://picsum.photos/id/1016/600/300",
    title: "Mountain",
  },
  {
    id: 3,
    url: "https://picsum.photos/id/1018/600/300",
    title: "River",
  },
];

const ImageList = () => {
  const imageData = initialData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < imageData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className={styles.imageDiv}>
      <button onClick={handlePrevious}>Previous</button>
      <ImageItem images={imageData[currentIndex]} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ImageList;
